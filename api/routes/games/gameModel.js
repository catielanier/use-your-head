"use strict";

const mongoose = require("mongoose");
const { model: Question } = require("../questions/questionModel");
const { Schema } = mongoose;

const gameSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  dateCreated: {
    type: Date,
    required: true,
    default: Date.now()
  },
  questions: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: Question
    }
  ]
});

exports.model = mongoose.model("Game", gameSchema);
