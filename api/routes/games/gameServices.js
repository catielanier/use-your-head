const { model: Game } = require("./gameModel");

exports.createGame = async game => {
  try {
    return await Game.create(game);
  } catch (e) {
    throw e;
  }
};

exports.getAllGames = async () => {
  try {
    return await Game.find({});
  } catch (e) {
    throw e;
  }
};
