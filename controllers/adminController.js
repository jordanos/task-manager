const User = require("../models/User");
const Task = require("../models/Task");
const Admin = require("../models/Admin");

const {
  GetAll,
  CreateOne,
  GetOne,
  DeleteOne,
  UpdateOne,
} = require("./templates");
const { validateAdminInput } = require("./validators");

exports.listAdmins = (req, res, next) => {
  const getAll = new GetAll(req, res, next, Admin, "admin");
  getAll.execute();
};

exports.createAdmin = (req, res, next) => {
  const createOne = new CreateOne(req, res, next, Admin, "admin");
  createOne.validate = validateAdminInput;
  createOne.execute();
};

exports.listUsers = (req, res, next) => {
  const getAll = new GetAll(req, res, next, User, "user");
  getAll.execute();
};

exports.listTasks = (req, res, next) => {
  const getAll = new GetAll(req, res, next, Task, "task");
  getAll.execute();
};

exports.listUserTasks = (req, res, next) => {
  const getAll = new GetAll(req, res, next, Task, "task");
  getAll.filter = { owner: req.params.id };
  getAll.execute();
};
