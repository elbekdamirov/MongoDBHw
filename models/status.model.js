const { Schema, model } = require("mongoose");

let statusSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Status name is required"],
      trim: true,
      minlength: [2, "Min 2"],
      maxlength: [50, "Max 50"],
      unique: true,
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
      trim: true,
      maxlength: [300, "Max 300"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

let statusModel = model("status", statusSchema);

module.exports = statusModel;
