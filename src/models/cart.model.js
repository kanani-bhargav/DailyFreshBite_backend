const mongoose = require("mongoose");

/**creating cart schema */
const cartSchema = new mongoose.Schema(
  {
    total_items: {
      type: Number,
      default: 0,
    },
    total_price: {
      type: Number,
      default: 0,
    },
    coupon_code: {
      type: String,
      trim: true,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
    food1: {
      type: mongoose.Types.ObjectId,
      ref: "food",
    },

    is_active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/**creating cart model */
const Cart = mongoose.model("cart", cartSchema);
module.exports = Cart;
