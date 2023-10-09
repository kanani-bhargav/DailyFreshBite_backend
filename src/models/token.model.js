const mongoose = require("mongoose");
/** creating token schema */
const tokenSchema = mongoose.Schema(
  {
    token: {
      type: String,
    },
    expire_time: {
      type: Date,
      default: null,
    },
    user: {
      type: mongoose.Types.ObjectId,
      ref: "user",
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
/** creating token model */
const Token = mongoose.model("Token", tokenSchema);

module.exports = Token;
