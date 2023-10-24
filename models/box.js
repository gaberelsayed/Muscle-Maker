const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boxShema = new Schema(
  {
    boxNameAr: {
      type: String,
      required: true,
    },
    boxNameEn: {
      type: String,
      required: true,
    },
    mealsNumber: {
      type: Number,
    },
    snacksNumber: {
      type: Number,
    },
    boxPrice: {
      type: Number,
    },
    boxImage: {
      type: String,
    },
    boxMenu: [
      {
        mealType: { type: String },
        mealsIds: [{ type: Schema.Types.ObjectId, ref: "meal" }],
      },
    ],
  },
  { timestamps: true, strictPopulate: false }
);

module.exports = mongoose.model("box", boxShema);
