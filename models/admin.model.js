const { Schema, model } = require("mongoose");

let adminSchema = new Schema(
  {
    full_name: {
      type: String,
      required: [true, "Full name is required"],
      minlength: [3, "Min 3"],
      maxlength: [100, "Max 100"],
    },
    user_name: {
      type: String,
      required: [true, "Username is required"],
      unique: true,
      minlength: [3, "Min 3"],
      maxlength: [50, "Max 50"],
      match: [
        /^[a-zA-Z0-9_]+$/,
        "Username can only contain letters, numbers, and underscores",
      ],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      minlength: [6, "Password must be at least 6 characters"],
    },
    phone_number: {
      type: Number,
      required: [true, "Phone number is required"],
      validate: {
        validator: function (v) {
          return /^[0-9]{10,15}$/.test(v.toString());
        },
        message: "Phone number must be between 10 to 15 digits",
      },
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      match: [/.+@.+\..+/, "Please enter a valid email address"],
    },
    tg_link: {
      type: String,
      required: [true, "Telegram link is required"],
      match: [
        /^https:\/\/t\.me\/[a-zA-Z0-9_]{5,}$/,
        "Enter a valid Telegram link",
      ],
    },
    token: {
      type: String,
      required: [true, "Token is required"],
    },
    is_creator: {
      type: Boolean,
      required: true,
      default: false,
    },
    is_active: {
      type: Boolean,
      required: true,
      default: true,
    },
    desc: {
      type: String,
      required: [true, "Description is required"],
      maxlength: [500, "Max 500"],
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

let adminModel = model("admin", adminSchema);

module.exports = adminModel;
