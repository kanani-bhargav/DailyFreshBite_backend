const mongoose = require("mongoose");
/**creating order schema */
const orderSchema = new mongoose.Schema(
  {
    order_status: {
      type: String,
      enum: ["place", "cancel", "reject"],
    },
    payment_method: {
      type: String,
      trim: true,
    },
    cart: {
      type: mongoose.Types.ObjectId,
      ref: "cart",
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
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

/**creating order model */
const Order = mongoose.model("order", orderSchema);
module.exports = Order;
