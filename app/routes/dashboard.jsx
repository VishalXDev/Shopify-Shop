import { useLoaderData } from "@remix-run/react";
import { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";
import Survey from "~/models/Survey";

export const loader = async () => {
  const responses = await Survey.find();
  return json(responses);
};

export default function Dashboard() {
  const responses = useLoaderData();
  const chartRef = useRef(null);

  // Process survey data
  const positiveCount = responses.filter(
    (r) => r.question1 === "positive"
  ).length;
  const neutralCount = responses.filter(
    (r) => r.question1 === "neutral"
  ).length;
  const negativeCount = responses.filter(
    (r) => r.question1 === "negative"
  ).length;

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext("2d");

      const chart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["Positive", "Neutral", "Negative"],
          datasets: [
            {
              label: "Responses",
              data: [positiveCount, neutralCount, negativeCount],
              backgroundColor: ["green", "yellow", "red"],
            },
          ],
        },
      });

      return () => chart.destroy();
    }
  }, [positiveCount, neutralCount, negativeCount]);

  return (
    <div>
      <h1>Survey Responses</h1>
      <canvas ref={chartRef} id="myChart" width="400" height="200"></canvas>
    </div>
  );
}
