const mongoose = require("mongoose");
const collectionName = "Employee";

const Schema = new mongoose.Schema(
  {
    _id: { type: String },
    name: { type: String, require: true },
    birthdateInfo: {
      datetime: { type: Date, default: null },
      month: { type: Number, default: null },
      year: { type: Number, default: null },
      day: { type: Number, default: null },
    },
    isRemove: { type: Boolean, default: false },
    isDeptor: { type: Boolean, default: false },
  },
  {
    timestamps: true,
    _id: false,
    versionKey:false,
  }
);
module.exports = mongoose.model(collectionName, Schema);
