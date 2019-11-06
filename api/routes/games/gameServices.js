const { model: Game } = require("./gameModel");

exports.createGame = async game => {
  return await Game.create(game);
};
