const Task = require("../models/Task");
const {
  GetAll,
  CreateOne,
  GetOne,
  DeleteOne,
  UpdateOne,
} = require("./templates");

exports.getTasks = (req, res, next) => {
  const getAll = new GetAll(req, res, next, Task, "task");
  getAll.execute();
};

exports.createTask = (req, res, next) => {
  const ceateOne = new CreateOne(req, res, next, Task, "task");
  ceateOne.execute();
};

exports.getTask = (req, res, next) => {
  const getOne = new GetOne(req, res, next, Task, "task");
  getOne.execute();
};

exports.updateTask = (req, res, next) => {
  const updateOne = new UpdateOne(req, res, next, Task, "task");
  updateOne.execute();
};

exports.deleteTask = (req, res, next) => {
  const deleteOne = new DeleteOne(req, res, next, Task, "task");
  deleteOne.execute();
};
