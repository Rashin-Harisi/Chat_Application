const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name : String,
    username : String,
    image : String,
    last_seen_date : String
});

module.exports = mongoose.model("User", UserSchema)
