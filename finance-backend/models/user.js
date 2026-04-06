const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({

 name:String,

 email:{
  type:String,
  unique:true
 },

 password:String,

 role:{
  type:String,
  enum:["viewer","analyst","admin"],
  default:"viewer"
 },

 status:{
  type:String,
  default:"active"
 }

})

module.exports = mongoose.model("User",userSchema)