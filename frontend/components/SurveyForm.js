import { useState } from "react";

export default function SurveyForm() {
    const [source, setSource] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch("http://localhost:5000/api/survey/submit", {
            method: "POST",
            body: JSON.stringify({ source }),
            headers: { "Content-Type": "application/json" }
        });

        if (response.ok) alert("Survey Submitted!");
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>How did you hear about us?</label>
            <select value={source} onChange={(e) => setSource(e.target.value)}>
                <option value="social_media">Social Media</option>
                <option value="search_engine">Search Engine</option>
                <option value="friend">Friend</option>
                <option value="other">Other</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    );
}
