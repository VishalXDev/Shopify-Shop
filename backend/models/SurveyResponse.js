import mongoose from "mongoose";

const SurveyResponseSchema = new mongoose.Schema({
    source: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("SurveyResponse", SurveyResponseSchema);
