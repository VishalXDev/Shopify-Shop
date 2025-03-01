import mongoose from "mongoose";

const SurveyResponseSchema = new mongoose.Schema({
    source: { type: String, required: true },
    timestamp: { type: Date, default: Date.now }
});

const SurveyResponse = mongoose.model("SurveyResponse", SurveyResponseSchema);
export default SurveyResponse;  // ✅ Use `export default`
