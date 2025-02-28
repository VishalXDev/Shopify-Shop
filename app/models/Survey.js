import mongoose from 'mongoose';

const surveySchema = new mongoose.Schema({
  question1: String,
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.models.Survey || mongoose.model('Survey', surveySchema);