import express from "express";
import SurveyResponse from "../models/SurveyResponse";
const router = express.Router();

// Submit Survey Response
router.post("/submit", async (req, res) => {
    try {
        const { source } = req.body;
        const response = new SurveyResponse({ source });
        await response.save();
        res.status(201).json({ message: "Survey submitted!" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Server error" });
    }
});

// Get All Responses
router.get("/responses", async (req, res) => {
    try {
        const responses = await SurveyResponse.find();
        res.status(200).json(responses);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error fetching responses" });
    }
});

module.exports = router;
