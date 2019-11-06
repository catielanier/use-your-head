const express = require("express");
const router = express.Router();
const tokenService = require("../../utils/tokenService");
const questionServices = require("../questions/questionServices");
const gameServices = require("./gameServices");

router.route("/").post(async (req, res) => {
  const { title, questions, token } = req.body;
  const loggedIn = await tokenService.verifyToken(token);
  if (loggedIn) {
    const game = {
      title
    };
    if (questions.length > 0) {
      const questionIds = [];
      for (let i = 0; i < questions.length; i++) {
        const newQuestion = await questionServices.createQuestion(questions[i]);
        if (newQuestion) {
          questionIds.push(newQuestion);
        } else {
          res
            .status(401)
            .statusMessage(
              `Issue with creating question: ${questions[i].title}`
            );
        }
      }
      game.questions = questionIds;
      const newGame = await gameServices.createGame(game);
      if (newGame) {
        res.status(201).json({
          data: {
            game: newGame
          }
        });
      } else {
        res.status(401).statusMessage("Unable to create game.");
      }
    } else {
      const newGame = await gameServices.createGame(game);
      if (newGame) {
        res.status(201).json({
          data: {
            game: newGame
          }
        });
      } else {
        res.status(401).statusMessage("Unable to create game.");
      }
    }
  } else {
    res.status(503).statusMessage("You are not logged in.");
  }
});

exports.router = router;
