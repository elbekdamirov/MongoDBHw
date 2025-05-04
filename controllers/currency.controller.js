const orderModel = require("../models/order.model");
const currencyModel = require("../models/currency_type.model");

async function findAll(req, res) {
  let { limit, offset } = req.query;
  try {
    limit = limit ? limit : 10;
    offset = offset ? offset : 1;

    let currencies = await currencyModel
      .find()
      .limit(limit)
      .skip((offset - 1) * limit);

    res.status(200).send({ data: currencies });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  let { id } = req.params;
  try {
    let currency = await currencyModel.findById(id);

    res.status(200).send({ data: currency });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  let data = req.body;
  try {
    let createCurrency = await currencyModel.create(data);
    let order = await orderModel.findById(data.order_id);

    order.currency_type_id.addToSet(createCurrency._id)

    await save();

    res.status(201).send({ data: createCurrency });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  let { id } = req.params;
  let data = req.body;
  try {
    let updateCurrency = await currencyModel.findByIdAndUpdate(id, data);

    res.status(200).send({ data: updateCurrency });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  let { id } = req.params;
  try {
    await currencyModel.findByIdAndDelete(id);

    res.status(201).send({ message: "Currency deleted" });
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
