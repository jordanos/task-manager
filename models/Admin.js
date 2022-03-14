const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema(
  {
    canRead: {
      type: Boolean,
      default: false,
    },
    canWrite: {
      type: Boolean,
      default: false,
    },
    canAddAdmin: {
      type: Boolean,
      default: false,
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

module.exports = mongoose.model("Admin", AdminSchema);
