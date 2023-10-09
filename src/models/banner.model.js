const mongoose = require("mongoose");

/**creating banner schema */
const bannerSchema = mongoose.Schema(
  {
    banner_name: {
      type: String,
      trim: true,
    },
    banner_description: {
      type: String,
      trim: true,
    },
    banner_image: {
      type: String,
      trim: true,
    },
    food: {
      type: mongoose.Types.ObjectId,
      ref: "food",
    },
    is_active: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
  );
  
  /**creating banner model */
  const Banner = mongoose.model("banner", bannerSchema);

module.exports = Banner;