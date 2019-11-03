"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const answerSchema = new Schema({
  answer: {
    type: String,
    required: true
  }
});

exports.model = mongoose.model("Answer", answerSchema);
