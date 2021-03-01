const express = require("express");
const { check } = require("express-validator");

const usersController = require("../controllers/users-controllers");

const router = express.Router();
const HttpError = require("../models/https-error");

router.get("/", usersController.getUsers);

router.post(
  "/signup",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 6 }),
  ],
  usersController.signup
);

router.post("/login", usersController.login);

// router.patch("/:pid", usersController);

// router.delete("/:pid", usersController);

module.exports = router;
