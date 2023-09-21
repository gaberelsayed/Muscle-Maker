const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const orderSchema = new Schema(
  {
    clientName: {
      type: String,
    },
    phoneNumber: {
      type: String,
    },
    carModel: {
      type: String,
    },
    plateNumber: {
      type: String,
    },
    carColor: {
      type: String,
    },
    branchName: {
      type: String,
    },
    orderDetails: [
      {
        mealId: { type: Schema.Types.ObjectId, required: true, ref: "meal" },
        mealTitle: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
      },
    ],
    paymentMethod: {
      type: String,
    },
    orderStatus: {
      type: String,
      default: "pending",
    },
    orderNumber: {
      type: Number,
    },
    orderAmount: {
      type: Number,
    },
    options: [
      {
        optionNameAR: { type: String },
        optionNameEN: { type: String },
        optionPrice: { type: Number },
      },
    ],
    extras: [
      {
        extraNameAR: { type: String },
        extraNameEN: { type: String },
        extraPrice: { type: Number },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
