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
    branchId: {
      type: String,
    },
    orderDetails: [
      {
        mealId: { type: Schema.Types.ObjectId, required: true, ref: "meal" },
        mealTitle: { type: String, required: true },
        quantity: { type: Number, required: true },
        price: { type: Number, required: true },
        options: [
          {
            optionId: { type: String },
            optionNameAR: { type: String },
            optionNameEN: { type: String },
            optionPrice: { type: Number },
          },
        ],
        extras: [
          {
            extraId: { type: String },
            extraNameAR: { type: String },
            extraNameEN: { type: String },
            extraPrice: { type: Number },
          },
        ],
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
    clientNotes: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("order", orderSchema);
