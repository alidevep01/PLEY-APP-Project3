const express = require("express");
const router = express.Router();

const ctrls = require("../controllers");


// we would need to create individual cards on index page for restaurants and then have reviews nested in the restaurants' :id page
router.get("/", ctrls.pley.index);
router.get("/:id", ctrls.pley.getById);
router.post("/:id", ctrls.pley.create);
router.delete("/:id", ctrls.pley.destroy);
router.put("/:id", ctrls.pley.update)

module.exports = router;
