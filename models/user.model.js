const { Schema, model } = require("mongoose");

let clientSchema = new Schema(
  {
    full_name: {
      type: String,
      required: [true, "Full name is required"],
      trim: true,
      minlength: [2, "Min 2"],
      maxlength: [100, "Max 100"],
    },
    phone_number: {
      type: String,
      required: [true, "Phone number is required"],
      maxlength: [15, "Max 15"],
      match: [
        /^[0-9+\-\s]+$/,
        "Phone number must be valid and contain only digits, spaces, + or -",
      ],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
      maxlength: [200, "Max 200"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
      maxlength: [100, "Max 100"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      unique: true,
      match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please provide a valid email address",
      ],
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "order",
      },
    ],
  },
  { timestamps: true, versionKey: false }
);

let clientModel = model("client", clientSchema);

module.exports = clientModel;
