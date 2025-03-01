document.addEventListener("DOMContentLoaded", function () {
    const cartElement = document.querySelector(".cart");
    
    if (!cartElement) {
        console.error("❌ Error: .cart element not found!");
        return;
    }

    // Prevent duplicate forms
    if (document.getElementById("checkout-survey")) return;

    const surveyForm = document.createElement("div");
    surveyForm.innerHTML = `
        <form id="checkout-survey" style="margin-top: 10px; padding: 10px; border: 1px solid #ccc; border-radius: 5px;">
            <label>How did you hear about us?</label>
            <select name="source" required>
                <option value="" disabled selected>Select an option</option>
                <option value="social_media">Social Media</option>
                <option value="search_engine">Search Engine</option>
                <option value="friend">Friend</option>
                <option value="other">Other</option>
            </select>
            <button type="submit" style="margin-left: 10px; padding: 5px 10px;">Submit</button>
            <p id="survey-message" style="color: green; display: none;"></p>
        </form>
    `;

    cartElement.appendChild(surveyForm);

    document.getElementById("checkout-survey").addEventListener("submit", async function (event) {
        event.preventDefault();
        const data = new FormData(event.target);
        const surveyMessage = document.getElementById("survey-message");

        try {
            const response = await fetch("/api/survey/submit", {
                method: "POST",
                body: JSON.stringify(Object.fromEntries(data)),
                headers: { "Content-Type": "application/json" },
            });

            if (response.ok) {
                surveyMessage.textContent = "✅ Survey submitted successfully!";
                surveyMessage.style.display = "block";
                event.target.reset();
            } else {
                surveyMessage.textContent = "❌ Failed to submit. Try again.";
                surveyMessage.style.color = "red";
                surveyMessage.style.display = "block";
            }
        } catch (error) {
            console.error("❌ Error submitting survey:", error);
            surveyMessage.textContent = "❌ Network error. Try again.";
            surveyMessage.style.color = "red";
            surveyMessage.style.display = "block";
        }
    });
});
