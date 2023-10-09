const mongoose = require("mongoose");

/**creating admin schema */
const adminSchema = new mongoose.Schema(
  {
    admin_name: {
      type: String,
      trim: true,
    },
    res_list: [
      {
        restaurant_name: {
          type: mongoose.Types.ObjectId,
          ref: "restaurant",
        },
      },
      {
        restaurant_name: {
          type: mongoose.Types.ObjectId,
          ref: "restaurant",
        },
      },
      {
        restaurant_name: {
          type: mongoose.Types.ObjectId,
          ref: "restaurant",
        },
      },
      {
        restaurant_name: {
          type: mongoose.Types.ObjectId,
          ref: "restaurant",
        },
      },
    ],
    verified: {
      type: Boolean,
      default: true,
    },
    status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/**creating admin model */
const Admin = mongoose.model("admin", adminSchema);
module.exports = Admin;
