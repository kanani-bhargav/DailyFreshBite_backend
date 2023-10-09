const mongoose = require("mongoose");
/**creating state schema */
const stateSchema = new mongoose.Schema(
  {
    state_name: {
      type: String,
      trim: true,
    },
    country: {
      type: mongoose.Types.ObjectId,
      ref: "Country",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

/**creating state model */
const State = mongoose.model("state", stateSchema);
module.exports = State;
