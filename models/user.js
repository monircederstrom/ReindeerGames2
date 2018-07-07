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
          }
  ],
  startDate: { type: Date },
  endDate: { type: Date }
});

const Game = mongoose.model("Game", gameSchema);

module.exports = User;
