"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

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
  video: String
});

exports.model = mongoose.model("Question", questionSchema);
