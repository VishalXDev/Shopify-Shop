import { useState } from "react";

const SurveyForm = () => {
  const [source, setSource] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/survey/submit", {
      method: "POST",
      body: JSON.stringify({ source }),
      headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
      alert("Survey submitted!");
      setSource("");
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
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring focus:ring-indigo-200"
          >
            <option value="">Select an option</option>
            <option value="social_media">Social Media</option>
            <option value="search_engine">Search Engine</option>
            <option value="friend">Friend</option>
            <option value="other">Other</option>
          </select>
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded mt-4 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SurveyForm;
