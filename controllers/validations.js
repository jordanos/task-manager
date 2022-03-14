const Joi = require("joi");
const CustomError = require("../utils/CustomError");

const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const taskSchema = Joi.object({
  title: Joi.string().required(),
  desc: Joi.string().required(),
  start: Joi.date().required(),
  end: Joi.date().required(),
  owner: Joi.string().required(),
});

// schema options
const options = {
  abortEarly: false, // include all errors
  allowUnknown: true, // ignore unknown props
  stripUnknown: true, // remove unknown props
};

exports.validateUserInput = (req) => {
  const { error, value } = userSchema.validate(req.body, options);
  if (error) {
    throw new CustomError(error.message, 400);
  }
};

exports.validateTaskInput = (req) => {
  const { error, value } = taskSchema.validate(req.body, options);
  if (error) {
    throw new CustomError(error.message, 400);
  }
};
