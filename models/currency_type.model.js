const { Schema, model } = require("mongoose");

let currencySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    order_id: {
      type: Schema.Types.ObjectId,
      ref: "order",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

let currencyModel = model("currency", currencySchema);

module.exports = currencyModel;
