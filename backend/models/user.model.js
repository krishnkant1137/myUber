const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
   fullname:{
    type: String,
    required: true,
    trim: true,
    minLength: [3, "name must be at least 3 characters"],
   },
   email:{
    type: String,
    required: true,
    trim: true,
    unique: true,
   },
   password:{
    type: String,
    required: true,
    trim: true,
    minLength: [6, "password must be at least 6 characters"],
    select: false,
   },
   socketId: {
    type: String,
    trim: true,
   }
})

userSchema.methods.generateAuthToken = function() {
  const token = jwt.sign({ _id: this._id}, process.env.JWT_SECRET);
  return token;
}

userSchema.methods.comparePassword = async function(password) {
  return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password) {
  return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model("User", userSchema);

module.exports = userModel;

