const mongoose = require("mongoose");

/**creating user schema */
const userSchema = new mongoose.Schema(
  {
    first_name: {
      type: String,
      trim: true,
    },
    last_name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      trim: true,
    },
    address: {
      type: String,
      trim: true,
    },
    is_active: {
      type: Boolean,
      default: true,
    },
    role: {
      type: String,
      default: "user",
    },
  },
  {
    timestamps: true,  //its use for created time and updated time
    versionKey: false,
  }
);

/**creating user model */
const User = mongoose.model("users", userSchema);
module.exports = User;
