const User = require("../models/User");
const {
  GetAll,
  CreateOne,
  GetOne,
  DeleteOne,
  UpdateOne,
} = require("./templates");
const { validateUserInput } = require("./validations");

exports.getUsers = (req, res, next) => {
  const getAll = new GetAll(req, res, next, User, "user");
  getAll.execute();
};

exports.createUser = (req, res, next) => {
  const createOne = new CreateOne(req, res, next, User, "user");
  createOne.validate = validateUserInput;
  createOne.execute();
};

exports.getUser = (req, res, next) => {
  const getOne = new GetOne(req, res, next, User, "user");
  getOne.execute();
};

exports.updateUser = (req, res, next) => {
  const updateOne = new UpdateOne(req, res, next, User, "user");
  updateOne.validate = validateUserInput;
  updateOne.execute();
};

exports.deleteUser = (req, res, next) => {
  const deleteOne = new DeleteOne(req, res, next, User, "user");
  deleteOne.execute();
};
