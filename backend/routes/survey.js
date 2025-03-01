import express from "express";
import SurveyResponse from "../models/SurveyResponse.js"; // ✅ Ensure correct import

const router = express.Router();

router.post("/submit", async (req, res) => {
    try {
        const { source } = req.body;
        if (!source) return res.status(400).json({ error: "Source is required" });

        const response = new SurveyResponse({ source });
        await response.save();

        res.status(201).json({ message: "Survey submitted!", response });
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" });
    }
});

router.get("/responses", async (req, res) => {
    try {
        const responses = await SurveyResponse.find();
        res.json(responses);
    } catch (error) {
        res.status(500).json({ error: "Failed to fetch responses" });
    }
});

export default router;
