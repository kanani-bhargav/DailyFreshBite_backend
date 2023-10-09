const mongoose = require("mongoose");

/**creating city schema */
const citySchema = new mongoose.Schema(
  {
    city_name: {
      type: String,
      trim: true,
    },
    state: {
      type: mongoose.Types.ObjectId,
      ref: "state",
    },
    country: {
      type: mongoose.Types.ObjectId,
      ref: "country",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/**creating city model */
const City = mongoose.model("city", citySchema);
module.exports = City;
