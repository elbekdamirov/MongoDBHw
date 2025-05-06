const { Schema, model } = require("mongoose");

let currencySchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Currency name is required"],
      minlength: [2, "Min 2"],
      maxlength: [50, "Max 50"],
      trim: true,
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
      maxlength: [300, "Max 300"],
      trim: true,
    },
    order_id: {
      type: Schema.Types.ObjectId,
      ref: "order",
      validate: {
        validator: function (v) {
          return Schema.Types.ObjectId.isValid(v);
        },
        message: "Invalid Order ID",
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

let currencyModel = model("currency", currencySchema);

module.exports = currencyModel;
