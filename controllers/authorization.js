const Task = require("../models/Task");
const CustomError = require("../utils/CustomError");
const ObjectId = require("mongodb").ObjectId;

// checks if a user is authorized to get/update thid user resource
exports.authorizeUser = (req) => {
  if (!(req.user.id === req.params.id))
    throw new CustomError("Unauthorized to access this file", 403);
};

// checks if a user is eligiable to perform oprations on a task
exports.authorizeTask = async (req) => {
  const task = await Task.findById(req.params.id);
  if (!task || !task.owner._id.equals(new ObjectId(req.user.id)))
    throw new CustomError("Unauthorized to access this file", 403);
};
