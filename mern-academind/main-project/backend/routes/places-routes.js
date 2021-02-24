const express = require("express");

const placesControllers = require("../controllers/places-controllers");

const router = express.Router();
const HttpError = require("../models/https-error");

router.get("/:pid", placesControllers.getPlaceById);

router.get("/user/:uid", placesControllers.getPlaceByUserId);

router.post("/", placesControllers.createPlace);

module.exports = router;