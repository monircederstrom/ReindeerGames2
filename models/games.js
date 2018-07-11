const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: { type: String, required: true },
<<<<<<< HEAD
  players: [
    {
      user: { type: Schema.Types.ObjectId, required: true, ref: "User" },
=======
  uniqueNum: {type: String },
  players: [
    {
      user: { type: String, ref: "User" },
>>>>>>> chase-branch
      score: { type: Number, default: 0 },
      photos: {}//something to do with GridFS, files, and chunks. is this doable?
    }
  ],
  // startDate: { type: Date, default: Date.now },
  // endDate: { type: Date }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;

