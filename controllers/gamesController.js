const db = require("../models");

// Defining methods for the booksController
module.exports = {
  //this query will pull games in which the user is playing
  //players.user: user UID
  findAll: function (req, res) {
    db.Game
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  },
  findAllGames: function(req, res) {
    db.Game
      .find({ "players.user": req.query.UID })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err)); 
  },
  //this query will allow us to see the info for a specific game
  findGameById: function(req, res) {
    db.Game
      .findById(req.query.GameId)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //this query will create a new game
  newGame: function(req, res) {
    db.Game
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //this query will create a new user
  newUser: function(req, res) {
    db.User
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //this query will update photos and score when a new photo is submitted
  updateScore: function(req, res) {
    db.Game
      .findOneAndUpdate({ _id: req.body._id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //this query will add a new player to the game (join game)
  newPlayer: function(req, res) {
    db.Game 
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err =>res.status(422).json(err));
  },
  //this query will delete games once the time runs out
  removeGame: function(req, res) {
    db.Game
      .findById({ _id: req.body._id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
