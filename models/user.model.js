const { Schema, model } = require("mongoose");

let clientSchema = new Schema(
  {
    full_name: {
      type: String,
      required: [true, "Full name is required"],
    },
    phone_number: {
      type: String,
      required: [true, "Phone number is required"],
      maxLength: [15, "Max length 15"],
    },
    address: {
      type: String,
      required: [true, "Address is required"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      match: /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/gim,
    },
    orders: [
      {
        type: Schema.Types.ObjectId,
        ref: "order", 
      }
    ]
  },
  { timestamps: true, versionKey: false }
);

let clientModel = model("client", clientSchema);

module.exports = clientModel;
