const { Router } = require("express");
const clientRouter = require("./client.routes")

let router = Router();


router.use("/clients", clientRouter)

module.exports = router;
