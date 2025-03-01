import { useState } from "react";

const SurveyForm = () => {
  const [source, setSource] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!source) {
      alert("Please select an option before submitting.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("/api/survey/submit", {
        method: "POST",
        body: JSON.stringify({ source }),
        headers: { "Content-Type": "application/json" },
      });

      if (response.ok) {
        alert("✅ Survey submitted successfully!");
        setSource("");
      } else {
        alert("❌ Failed to submit survey. Please try again.");
      }
    } catch (error) {
      alert("❌ Network error. Please check your connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold text-gray-700 text-center">
          How did you hear about us?
        </h2>
        <form className="mt-4" onSubmit={handleSubmit}>
          <select
            value={source}
            onChange={(e) => setSource(e.target.value)}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200 p-2"
            aria-label="Select how you heard about us"
            disabled={loading}
          >
            <option value="">Select an option</option>
            <option value="social_media">Social Media</option>
            <option value="search_engine">Search Engine</option>
            <option value="friend">Friend</option>
            <option value="other">Other</option>
          </select>
          <button
            type="submit"
            className={`w-full text-white font-bold py-2 px-4 rounded mt-4 transition ${
              !source || loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-indigo-500 hover:bg-indigo-600"
            }`}
            disabled={!source || loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default SurveyForm;
