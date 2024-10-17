const express = require('express');

const router = express.Router();
const mhsRouter = require("./mahasiswa");

router.use("/mahasiswa",mhsRouter);

module.exports = router;

