const userModel = require("../models/user.model");
const userService = require("../services/user.service");
const { validationResult } =  require("express-validator");


module.exports.registerUser = async (req, res, next) => {
  
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(400).json({ errors: errors.array() });
  }

  console.log("hellow",req.body);


  const {fullName, email, password } = req.body;

  const hashedPassword = await userModel.hashPassword(password);

  const user = await userService.createUser({
    fullName,
    email,
    password:hashedPassword,
  });

  const token = user.generateAuthToken();

  res.status(201).json({ token, user });

}