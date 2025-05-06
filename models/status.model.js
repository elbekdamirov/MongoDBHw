const { Schema, model } = require("mongoose");

let statusSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

let statusModel = model("status", statusSchema);

module.exports = statusModel;
