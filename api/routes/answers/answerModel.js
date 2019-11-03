"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;
const { model: Team } = require("../teams/teamModel");

const answerSchema = new Schema({
  answer: {
    type: String,
    required: true
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: Team
  }
});

exports.model = mongoose.model("Answer", answerSchema);
