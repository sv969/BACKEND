const express = require("express");
const controller = require("../controllers/places-controller");

const router = express.Router();

router.get("/:pid", controller.getPlaceByID);

router.get("/user/:uid", controller.getPlacesByUserID);

router.post("/", controller.createPlace);

router.patch("/:pid", controller.updatePlace);

router.delete("/:pid", controller.deletePlace);

module.exports = router;
