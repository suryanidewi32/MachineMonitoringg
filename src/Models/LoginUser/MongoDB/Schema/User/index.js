const mongoose = require('mongoose')
const {Schema} = mongoose
const userSchema = new mongoose.Schema({
  fullName:{
      type:String,
      required:true
  },
  email:{
      type:String,
      required:true
  },
  password:{
      type:String,
      required:true
  },

  ConfirmPassword:{
      type:String,
      required:true
  },
  resetToken:String,
  expiredToken:Date
})  
const user = mongoose.model('user', userSchema)
module.exports = user;
