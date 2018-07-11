const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema ({
<<<<<<< HEAD
    UID: { type: String, required: true},
    userName: { type: String, required: true },
=======
    UID: { type: String, required: true },
    username: { type: String , required: true }
>>>>>>> chase-branch
});

const User = mongoose.model("User", userSchema);

module.exports = User;