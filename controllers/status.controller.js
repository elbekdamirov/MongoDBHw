const operationModel = require("../models/operation.model");
const statusModel = require("../models/status.model");

async function findAll(req, res) {
  let { limit, offset } = req.query;
  try {
    limit = limit ? limit : 10;
    offset = offset ? offset : 1;

    let status = await statusModel
      .find()
      .limit(limit)
      .skip((offset - 1) * limit);

    res.status(200).send({ data: status });
  } catch (error) {
    console.log(error.message);
  }
}

async function findOne(req, res) {
  let { id } = req.params;
  try {
    let status = await statusModel.findById(id);

    res.status(200).send({ data: status });
  } catch (error) {
    console.log(error.message);
  }
}

async function create(req, res) {
  let data = req.body;
  try {
    let createStatus = await statusModel.create(data);
    let operation = await operationModel.findById(data.operation_id);

    operation.status_id.addToSet(createStatus._id);

    await save();

    res.status(201).send({ data: createStatus });
  } catch (error) {
    console.log(error.message);
  }
}

async function update(req, res) {
  let { id } = req.params;
  let data = req.body;
  try {
    let updateStatus = await statusModel.findByIdAndUpdate(id, data);

    res.status(200).send({ data: updateStatus });
  } catch (error) {
    console.log(error.message);
  }
}

async function remove(req, res) {
  let { id } = req.params;
  try {
    await statusModel.findByIdAndDelete(id);

    res.status(201).send({ message: "Status deleted" });
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
