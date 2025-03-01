import React from "react";

const DataTable = ({ data }) => {
  if (!data || data.length === 0) {
    return (
      <p className="text-center text-gray-500 py-4">
        🚫 No data available
      </p>
    );
  }

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border border-gray-300 shadow-md rounded-lg">
        <thead className="bg-gray-100 text-left">
          <tr>
            {Object.keys(data[0]).map((key) => (
              <th key={key} className="px-4 py-2 border text-sm font-semibold">
                {key.toUpperCase()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr
              key={index}
              className={`border ${index % 2 === 0 ? "bg-white" : "bg-gray-50"}`}
            >
              {Object.values(row).map((value, i) => (
                <td key={i} className="px-4 py-2 border text-sm">
                  {typeof value === "string" || typeof value === "number"
                    ? value
                    : JSON.stringify(value)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
