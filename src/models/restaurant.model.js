const mongoose = require("mongoose");
/**creating restaurant schema */
const restaurantSchema = mongoose.Schema(
  {
    restaurant_name: {
      type: String,
      trim: true,
    },
    restaurant_address: {
      type: String,
      trim: true,
    },
    restaurant_contact_no: {
      type: String,
      trim: true,
    },
    owner_detail: {
      type: String,
      trim: true,
    },
    owner_contact_no: {
      type: String,
      trim: true,
    },
    whatsapp_notification: {
      type: Boolean,
      default: true,
    },
    restaurant_image: {
      type: String,
      trim: true,
    },
    food_image: {
      type: String,
      trim: true,
    },
    restaurant_type: {
      type: mongoose.Types.ObjectId,
      ref: "restaurantType",
    },
    city: {
      type: mongoose.Types.ObjectId,
      ref: "City",
    },
    restaurant_status: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/**creating restaurant model */
const Restaurant = mongoose.model("restaurant", restaurantSchema);
module.exports = Restaurant;
