const mongoose = require("mongoose");
/**creating food schema */
const foodSchema = new mongoose.Schema(
  {
    food_name: {
      type: String,
      trim: true,
    },
    food_price: {
      type: Number,
      default: 10,
    },
    restaurant: {
      type: mongoose.Types.ObjectId,
      ref: "restaurant",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/**creating food model */
const Food = mongoose.model("food", foodSchema);
module.exports = Food;
