const mongoose = require("mongoose");
/**creating country schema */
const countrySchema = new mongoose.Schema(
  {
    country_name: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/**creating country model */
const Country = mongoose.model("country", countrySchema);
module.exports = Country;
