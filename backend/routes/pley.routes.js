const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");

router.get("/", ctrls.pley.index);
router.post("/", ctrls.pley.create);

module.exports = router;
