const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  name: { type: String, required: true },
  uniqueNum: {type: String },
  players: [
    {
      // user made into a string again
      user: { type: String, ref: "User" },
      score: { type: Number, default: 0 },
      photos: {}//something to do with GridFS, files, and chunks. is this doable?
    }
  ],
  // startDate: { type: Date, default: Date.now },
  // endDate: { type: Date }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;

