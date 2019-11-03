"use strict";

const mongoose = require("mongoose");
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
  }
});

exports.model = mongoose.model("Game", gameSchema);
