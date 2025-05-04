const { Schema, model } = require("mongoose");

let orderSchema = new Schema(
  {
    product_link: {
      type: String,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    summa: {
      type: Number,
      required: true,
    },
    truck: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    client_id: {
      type: Schema.Types.ObjectId,
      ref: "client",
    },
    currency_type_id: {
      type: Schema.Types.ObjectId,
      ref: "currency",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

let orderModel = model("order", orderSchema);

module.exports = orderModel;
