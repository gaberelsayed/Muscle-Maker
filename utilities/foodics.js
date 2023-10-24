const axios = require("axios");

exports.sendOrderToFoodics = async (order) => {
  try {
    const config = {
      Authorization:
        "Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiI5YTQ5ZDU2YS05NTExLTQ5OGItYjU0YS01YjJkNWYxNTBjMWUiLCJqdGkiOiIxYzQzMjI1NDNiYjZkZGY4MjQ0ZDZiNTg2MTk2YjQ0OTdmMGZjYjJmN2ZjYjQyOTM3Y2FkMjE4NTNlZGEwOGEyMzBkMmI2MjExNzU5MDg3YyIsImlhdCI6MTY5ODEzNDUwNC4wOTg1NjcsIm5iZiI6MTY5ODEzNDUwNC4wOTg1NjcsImV4cCI6MTg1NTk4NzMwNC4wMzU2MDksInN1YiI6IjlhNDlkNDMzLThiOGUtNDI4NC1hYzgzLWUyOTBmNjU2ZTQ3NSIsInNjb3BlcyI6W10sImJ1c2luZXNzIjoiOWE0OWQ0MzMtOWYwNS00YTQyLWIxNTItNDMyMzJlZGUyODA0IiwicmVmZXJlbmNlIjoiMjI3MDM5In0.WyPLOS2GGFnkCbMSMQm6CIPSqRY99X4G1MpH6jRAaikg8FEpRRAk42wrHAR3tIieQp24LybHULNN4nAp__QScvrTUP8kIYb7S2cxVcvO2cn7wp53bA3EA25hUBex57YegrQCAfn3Bvcyr5JcXMQ4Ql7cIvISexPEocXc9Aog8y1oDdelzQkrpCgpADtxEZ2TOrFSCFgK8V-vOnY9Cp7trQ2YO4YlpJgx1RiLkh6DwhPeVLc_Z3_Md58UxgiG98rMzrqpYHE9si8CGjFh8DxwN9B3NtWdkJ2dH-vLsUu8EV1HzqCT4XgyLvdW1ucZ9mKYQkYm7l09SJgDXhQqrlJQNCvyV_l7qifFp99oOB2KMmeWdvXx_rR94oosuTiL6v7Tk-PgB5VUdTgT7exSbJUoEsT6Jdjy7PPPJ8SR1Qirtpwy4HbBIYW4J4p8l-lzLYB9cznXOg_tRNepzHzWOC2hhu2WzSpth5jl8-E4CFv-qRxjQWYWXa-KhR8bnzcXe89GuI_oDwnNYJEGNGSit9eCflUoNSmum3SmyP7cVYyELThhL7tRBnPelrhWD_q3XTFwYiYFZ59V3igra4-N6NOkGcnApVKZpA8L9kLCqSkAlNv7AJ1SU7abEzy3lLnDKyvvufndd7elM9GTQBax0xcFNRF6m3yl8DytPqVqnNHHhm4",
      "Content-Type": "application/json",
      Accept: "application/json",
    };
    const orderDetails = [];
    for (let product of order.orderDetails) {
      let item = {};
      item.product_id = product.mealId.toString();
      item.quantity = product.quantity;
      item.unit_price = product.price;
      item.options = [];
      if (product.options.length > 0) {
        for (let option of product.options) {
          let optionObj = {};
          optionObj.modifier_option_id = option.optionId.toString();
          optionObj.unit_price = option.optionPrice;
          item.options.push(optionObj);
        }
      }
      if (product.extras.length > 0) {
        for (let extra of product.extras) {
          let extraObj = {};
          extraObj.modifier_option_id = extra.extraId.toString();
          extraObj.unit_price = extra.extraPrice;
          item.options.push(extraObj);
        }
      }
      orderDetails.push(item);
    }
    const data = {
      branch_id: order.branchId,
      total_price: order.orderAmount,
      kitchen_notes: order.clientNotes,
      customer_notes: `${order.carModel}-${order.carColor}-${order.plateNumber}`,
      customer_address_id: order.phoneNumber,
      meta: {
        external_number: order.orderNumber,
      },
      products: orderDetails,
    };
    console.log(data);
    const response = await axios.post(
      `${process.env.Foodics_Test_Uri}/orders`,
      config,
      data
    );
    console.log(response.data);
    return response.data;
  } catch (err) {
    throw new Error(err);
  }
};
