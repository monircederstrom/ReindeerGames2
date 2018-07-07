const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const gameSchema = new Schema({
  _id: ObjectId,
  name: { type: String, required: true },
  creator: { type: String, required: true },
  players: [
    {
      name: { type: String, required: true, default: this.creator },
      score: { type: Number, default: 0 },
      photos: //something to do with GridFS, files, and chunks. is this doable?
    }
  ],
  startDate: { type: Date },
  endDate: { type: Date }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = Game;
