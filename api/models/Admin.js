const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    canRead: {
      type: Boolean,
      default: true,
    },
    canWrite: {
      type: Boolean,
      default: false,
    },
    canAddAdmin: {
      type: Boolean,
      default: false,
    },
    canRemoveAdmin: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
      unique: true,
    },
  },
  {
    toJSON: { virtuals: true },
    toObject: { virtuals: true },
  }
);

module.exports = mongoose.model("Admin", AdminSchema);
