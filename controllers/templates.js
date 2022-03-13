const CustomError = require("../utils/CustomError");

class BaseTemplate {
  constructor(req, res, next, model, modelName) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.model = model;
    this.modelName = modelName;
  }

  performReq() {
    throw new Error("No function has been implemented to perform the request");
  }

  execute() {
    this.performReq();
  }
}

exports.GetAll = class GetAll extends BaseTemplate {
  constructor(req, res, next, model, modelName) {
    super(req, res, next, model, modelName);
  }

  async performReq() {
    try {
      const doc = await this.model.find();
      this.res.status(200).json({
        data: doc,
      });
    } catch (e) {
      this.next(new CustomError(e.message, 500));
    }
  }
};

exports.CreateOne = class CreateOne extends BaseTemplate {
  constructor(req, res, next, model, modelName) {
    super(req, res, next, model, modelName);
  }

  async performReq() {
    try {
      const doc = await this.model.create(this.req.body);
      this.res.status(201).json({
        data: doc,
      });
    } catch (e) {
      if (e.name === "ValidationError" || e.name === "DuplicateKeyError") {
        this.next(new CustomError(e.message, 400));
        return;
      }
      this.next(new CustomError(e.message, 500));
    }
  }
};

exports.GetOne = class GetOne extends BaseTemplate {
  constructor(req, res, next, model, modelName) {
    super(req, res, next, model, modelName);
  }

  async performReq() {
    try {
      const id = this.req.params.id;
      const doc = await this.model.findById(id);
      // throw exception if doc is null/not found
      if (!doc)
        return this.next(
          new CustomError(`${this.modelName} id ${id} not found`, 404)
        );
      this.res.status(200).json({
        data: doc,
      });
    } catch (e) {
      this.next(new CustomError(e.message, 500));
    }
  }
};

exports.UpdateOne = class UpdateOne extends BaseTemplate {
  constructor(req, res, next, model, modelName) {
    super(req, res, next, model, modelName);
  }

  async performReq() {
    try {
      const id = this.req.params.id;
      const doc = await this.model.findOneAndUpdate(req.body, { id: id });
      // throw exception if doc is null/not found
      if (!doc.acknowledged)
        return this.next(
          new CustomError(`${this.modelName} id ${id} not found`, 404)
        );
      this.res.status(200).json({
        data: doc,
      });
    } catch (e) {
      if (e.name === "ValidationError" || e.name === "DuplicateKeyError") {
        this.next(new CustomError(e.message, 400));
        return;
      }
      this.next(new CustomError(e.message, 500));
    }
  }
};

exports.DeleteOne = class DeleteOne extends BaseTemplate {
  constructor(req, res, next, model, modelName) {
    super(req, res, next, model, modelName);
  }

  async performReq() {
    try {
      const id = this.req.params.id;
      const doc = await this.model.deleteOne({ id: id });
      // throw exception if doc is null/not found
      if (!doc.acknowledged)
        return this.next(
          new CustomError(`${this.modelName} id ${id} not found`, 404)
        );
      this.res.status(200).json({
        data: doc,
      });
    } catch (e) {
      this.next(new CustomError(e.message, 500));
    }
  }
};
