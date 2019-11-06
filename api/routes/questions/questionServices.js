const { model: Question } = require("./questionModel");

exports.createQuestion = async question => {
  try {
    return await Question.create(question);
  } catch (e) {
    throw e;
  }
};
