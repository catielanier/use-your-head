"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;
const { model: Answer } = require("../answers/answerModel");

const questionSchema = new Schema({
  question: {
    type: String,
    required: true
  },
  expectedAnswer: {
    type: String,
    required: true
  },
  image: String,
  video: String,
  answers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Answer
    }
  ]
});

exports.model = mongoose.model("Question", questionSchema);
