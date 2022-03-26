const Task = require("../models/Task");
const { authorizeTask } = require("../middlewares/authorizationMiddleware");
const {
  GetAll,
  CreateOne,
  GetOne,
  DeleteOne,
  UpdateOne,
} = require("./templates");
const { validateTaskInput } = require("../utils/validators");

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
  const getOne = new GetOne(req, res, next, Task, "task");
  getOne.execute();
};

exports.updateTask = async (req, res, next) => {
  const updateOne = new UpdateOne(req, res, next, Task, "task");
  updateOne.validate = validateTaskInput;
  updateOne.execute();
};

exports.deleteTask = async (req, res, next) => {
  const deleteOne = new DeleteOne(req, res, next, Task, "task");
  deleteOne.execute();
};
