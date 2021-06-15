const { Router } = require("express");
const { getAllTemperamentDB } = require("../Controllers/temperament");
const router = Router();

router.get("/", getAllTemperamentDB);

module.exports = router;
