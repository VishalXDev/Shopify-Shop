document.addEventListener("DOMContentLoaded", function() {
    const surveyForm = document.createElement("div");
    surveyForm.innerHTML = `
        <form id="checkout-survey">
            <label>How did you hear about us?</label>
            <select name="source">
                <option value="social_media">Social Media</option>
                <option value="search_engine">Search Engine</option>
                <option value="friend">Friend</option>
                <option value="other">Other</option>
            </select>
            <button type="submit">Submit</button>
        </form>
    `;
    document.querySelector(".cart").appendChild(surveyForm);

    document.getElementById("checkout-survey").addEventListener("submit", function(event) {
        event.preventDefault();
        const data = new FormData(event.target);
        fetch('/api/survey/submit', {
            method: 'POST',
            body: JSON.stringify(Object.fromEntries(data)),
            headers: { "Content-Type": "application/json" }
        });
    });
});
