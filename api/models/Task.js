const mongoose = require("mongoose");

const TaskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Please provide task title"],
    },
    desc: {
      type: String,
      required: [true, "Please provide task description"],
    },
    start: {
      type: Date,
      required: [true, "Please provide start time"],
    },
    end: {
      type: Date,
      required: [true, "Please provide end time"],
    },
    status: {
      type: String,
      default: false,
    },
    createdAt: {
      type: Date,
      default: Date.now(),
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Task", TaskSchema);
