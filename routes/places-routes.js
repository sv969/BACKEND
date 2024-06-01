const express = require("express");
const controller = require("../controllers/places-controller");
const router = express.Router();

router.get("/:pid", controller.getPlaceByID);

router.get("/user/:uid", controller.getPlaceByUserID);

router.post("/", controller.createPlace);

module.exports = router;
