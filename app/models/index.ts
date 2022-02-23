import mongoose from "mongoose";
mongoose.Promise = global.Promise;

//This is our entire database
const database = {
  mongoose: mongoose,
  //Add models here
  user: require("./user.model"),
};

export default database;
