const mongoose = require("mongoose");
const passport = require("passport");

const plm = require("passport-local-mongoose");

const userSchema = new mongoose.Schema({
    username:String,
    password: String,
    // email:String,
    profileImage: {
        type: String,
        default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtRs_rWILOMx5-v3aXwJu7LWUhnPceiKvvDg&s"
    },
    socketId:String
})

userSchema.plugin(plm);

module.exports = mongoose.model('user', userSchema)