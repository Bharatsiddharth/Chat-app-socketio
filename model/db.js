const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0/chatApp")
    .then(() => console.log("db connected"))
    .catch((error) => console.log(error))