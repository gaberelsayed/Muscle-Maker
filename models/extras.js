const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const extraSchema = new Schema(
  {
    extraNameAR: {
      type: String,
    },
    extraNameEN: {
      type: String,
    },
    extraPrice: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("extras", extraSchema);
