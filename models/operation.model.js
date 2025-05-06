const { Schema, model } = require("mongoose");

let operationSchema = new Schema(
  {
    operation_date: {
      type: Date,
      required: [true, "Operation date is required"],
      validate: {
        validator: function (value) {
          return value instanceof Date && !isNaN(value);
        },
        message: "Invalid operation date",
      },
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
    status_id: {
      type: Schema.Types.ObjectId,
      ref: "status",
      validate: {
        validator: function (v) {
          return Schema.Types.ObjectId.isValid(v);
        },
        message: "Invalid Status ID",
      },
    },
    admin_id: {
      type: Schema.Types.ObjectId,
      ref: "admin",
      validate: {
        validator: function (v) {
          return Schema.Types.ObjectId.isValid(v);
        },
        message: "Invalid Admin ID",
      },
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

let operationModel = model("operation", operationSchema);

module.exports = operationModel;
