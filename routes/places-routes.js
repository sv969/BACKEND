const express = require("express");
const { check } = require("express-validator");
const controller = require("../controllers/places-controller");

const router = express.Router();

router.get("/:pid", controller.getPlaceByID);

router.get("/user/:uid", controller.getPlacesByUserID);

router.post(
  "/",
  [
    check("title").not().isEmpty(),
    check("description").isLength({ min: 5 }),
    check("address").not().isEmpty(),
  ],
  controller.createPlace
);

router.patch(
  "/:pid",
  [check("title").not().isEmpty(), check("description").isLength({ min: 5 })],
  controller.updatePlace
);

router.delete("/:pid", controller.deletePlace);

module.exports = router;
