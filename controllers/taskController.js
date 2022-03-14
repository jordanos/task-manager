const Task = require("../models/Task");
const { authorizeTask } = require("./authorization");
const {
  GetAll,
  CreateOne,
  GetOne,
  DeleteOne,
  UpdateOne,
} = require("./templates");
const { validateTaskInput } = require("./validators");

exports.getTasks = (req, res, next) => {
  const getAll = new GetAll(req, res, next, Task, "task");
  getAll.filter = { owner: req.user.id };
  getAll.execute();
};

exports.createTask = (req, res, next) => {
  // make the owner of the task the logged in user
  const modfiedReq = { ...req, body: { ...req.body, owner: req.user.id } };

  const createOne = new CreateOne(modfiedReq, res, next, Task, "task");
  createOne.validate = validateTaskInput;
  createOne.execute();
};

exports.getTask = async (req, res, next) => {
  try {
    await authorizeTask(req);
    const getOne = new GetOne(req, res, next, Task, "task");
    getOne.execute();
  } catch (e) {
    next(e);
  }
};

exports.updateTask = async (req, res, next) => {
  try {
    await authorizeTask(req);
    const updateOne = new UpdateOne(req, res, next, Task, "task");
    updateOne.validate = validateTaskInput;
    updateOne.execute();
  } catch (e) {
    next(e);
  }
};

exports.deleteTask = async (req, res, next) => {
  try {
    await authorizeTask(req);
    const deleteOne = new DeleteOne(req, res, next, Task, "task");
    deleteOne.execute();
  } catch (e) {
    next(e);
  }
};
