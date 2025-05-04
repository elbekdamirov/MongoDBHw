const clientModel = require("../models/user.model");
const orderModel = require("../models/order.model");

async function findAll(req, res) {
  let { limit, offset } = req.query;
  try {
    limit = limit ? limit : 10;
    offset = offset ? offset : 1;

    let orders = await orderModel
      .find()
      .limit(limit)
      .skip((offset - 1) * limit);

    res.status(200).send({ data: orders });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  let { id } = req.params;
  try {
    let order = await orderModel.findById(id);

    res.status(200).send({ data: order });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  let data = req.body;
  try {
    let createOrder = await orderModel.create(data);
    let client = await clientModel.findById(data.client_id);

    client.orders.addToSet(createOrder._id);

    await save();

    res.status(201).send({ data: createOrder });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  let { id } = req.params;
  let data = req.body;
  try {
    let updateOrder = await orderModel.findByIdAndUpdate(id, data);

    res.status(200).send({ data: updateOrder });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  let { id } = req.params;
  try {
    await orderModel.findByIdAndDelete(id);

    res.status(201).send({ message: "Order deleted" });
  } catch (error) {
    console.log(error.message);
  }
}

module.exports = {
  findAll,
  findOne,
  create,
  update,
  remove,
};
