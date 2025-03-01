const mongoose = require("mongoose");

const SurveyResponseSchema = new mongoose.Schema({
  question: String,
  answer: String,
});

module.exports = mongoose.model("SurveyResponse", SurveyResponseSchema);
