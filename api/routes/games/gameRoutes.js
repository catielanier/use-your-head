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
      for (let i = 0; i < questions.length; i) {
        const newQuestion = await questionServices.createQuestion(questions[i]);
        questionIds.push(newQuestion._id);
      }
      game.questions = questionIds;
      const res = await gameServices.createGame(game);
      res.status(201).json({
        data: {
          game: res
        }
      });
    } else {
      const res = await gameServices.createGame(game);
      res.status(201).json({
        data: {
          game: res
        }
      });
    }
  } else {
    res.status(503).statusMessage("You are not logged in.");
  }
});
