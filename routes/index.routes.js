const { Router } = require("express");
const clientRouter = require("./client.routes");
const adminRouter = require("./admin.routes");
const currencyRouter = require("./currency.routes");
const operationRouter = require("./operation.routes");
const oderRouter = require("./order.routes");
const statusRouter = require("./status.routes");

let router = Router();

router.use("/clients", clientRouter);
router.use("/admins", adminRouter);
router.use("/currency", currencyRouter);
router.use("/clients", clientRouter);
router.use("/operation", operationRouter);
router.use("/order", oderRouter);
router.use("/status", statusRouter);

module.exports = router;
