const express = require("express");
const router = express.Router();
const {body} = require("express-validator");
const userController = require("../controllers/user.controller");

router.post("/register", [
  body('email').isEmail().withMessage("invalid Email"),
  body('fullName').isLength({min: 3}).withMessage("name is atLeast contain 3 charectors"),
  body('password').isLength({min: 6}).withMessage("password is atLeast contain 6 charectors"),
], userController.registerUser
)

router.post('/login', [
  body('email').isEmail().withMessage("invalid Email"),
  body('password').isLength({min: 6}).withMessage("password is atLeast contain 6 charectors"),
], 
    userController.loginUser
)


module.exports = router;