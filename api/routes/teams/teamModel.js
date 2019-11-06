"use strict";

const mongoose = require("mongoose");
const { Schema } = mongoose;

const teamSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  score: {
    type: Number,
    default: 0,
    required: true
  }
});

exports.model = mongoose.model("Team", teamSchema);
