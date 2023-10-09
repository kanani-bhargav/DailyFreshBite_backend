const mongoose = require("mongoose");
/**creating restaurant schema */
const restaurantTypeSchema = mongoose.Schema(
  {
    restaurant_type: {
      type: String,
      trim: true,
    },
    type_desc: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
/**creating restaurant model */
const restaurantType = mongoose.model("restaurantType", restaurantTypeSchema);
module.exports = restaurantType;
