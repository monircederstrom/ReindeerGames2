const router = require("express").Router();
const gamesController = require("../../controllers/gamesController");

router
  .route("/test")
  .get((req, res) => {
    res.send("Hello");
  });
//route to add a new user document to the Users collection
//postman test is good for newUser route
router
  .route("/user/newUser")
  .post(gamesController.newUser);

//route to add a new game document to the Games collection
router  
  .route("game/newGame")
  .post(gamesController.newGame);

//route to add a new player to a game
router
  .route("game/newPlayer")
  .post(gamesController.newPlayer);


// Route to display all games in which the user is a participant
router
  .route("/game/allGames")
  .get(gamesController.findAllGames);
  // .post(gamesController.create);

//route to display details of a specific game
router
  .route("/game/:id")
  .get(gamesController.findGameById);

//this route updates score and photos
router
  .route("game/:id/score")
  .post(gamesController.updateScore);

//route to delete game when game is over
router
  .route("game/removeGame")
  .post(gamesController.removeGame);




// Matches with "/api/books/:id"
// router
//   .route("/:id")
//   .get(gamesController.findById)
//   .put(gamesController.update)
//   .delete(gamesController.remove);

module.exports = router;
