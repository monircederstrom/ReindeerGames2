const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
    UID: { type: String, required: true},
    userName: { type: String, required: true },
});

const User = mongoose.model("User", userSchema);

module.exports = User;