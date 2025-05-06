const { Schema, model } = require("mongoose");

let orderSchema = new Schema(
  {
    product_link: {
      type: String,
      required: [true, "Product link is required"],
      trim: true,
      match: [/^https?:\/\/.+/, "Product link must be a valid URL"],
    },
    quantity: {
      type: Number,
      required: [true, "Quantity is required"],
      min: [1, "Min 1"],
    },
    summa: {
      type: Number,
      required: [true, "Summa is required"],
      min: [0, "Summa must be a positive number"],
    },
    truck: {
      type: String,
      required: [true, "Truck is required"],
      trim: true,
      maxlength: [100, "Max 100"],
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
      maxlength: [500, "Max 500"],
      trim: true,
    },
    client_id: {
      type: Schema.Types.ObjectId,
      ref: "client",
      validate: {
        validator: function (v) {
          return Schema.Types.ObjectId.isValid(v);
        },
        message: "Invalid Client ID",
      },
    },
    currency_type_id: {
      type: Schema.Types.ObjectId,
      ref: "currency",
      validate: {
        validator: function (v) {
          return Schema.Types.ObjectId.isValid(v);
        },
        message: "Invalid Currency ID",
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

let orderModel = model("order", orderSchema);

module.exports = orderModel;
