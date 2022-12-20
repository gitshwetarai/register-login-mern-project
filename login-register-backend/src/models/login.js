//Define Schema
const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    name: 
    {
        type: String
    },
    email: 
    {
        type: String,
        unique: true
    },
    password: 
    {
        type: String,
        unique: true
    }
})

const User = new mongoose.model("User", userSchema);

module.exports = User;