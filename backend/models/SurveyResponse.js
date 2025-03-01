import mongoose from "mongoose";

const SurveyResponseSchema = new mongoose.Schema({
    source: { type: String, required: true },
    timestamp: { type: Date, default: Date.now } // ✅ Keeps automatic timestamp
});

const SurveyResponse = mongoose.model("SurveyResponse", SurveyResponseSchema);
export default SurveyResponse;
