// App.jsx
import React, { useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";

const initialData = [
  { name: "Item A", price: 100 },
  { name: "Item B", price: 200 },
  { name: "Item C", price: 150 },
  { name: "Item D", price: 300 },
];

export default function App() {
  const [chartData, setChartData] = useState([]);

  const handleClick = (item) => {
    // Prevent duplicates
    if (!chartData.find((d) => d.name === item.name)) {
      setChartData([...chartData, item]);
    }
  };

  return (
    <div className="p-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Click to Add Items to Chart</h1>

      <div className="grid grid-cols-2 gap-4 mb-6">
        {initialData.map((item) => (
          <button
            key={item.name}
            onClick={() => handleClick(item)}
            className="p-4 bg-blue-500 text-white rounded-xl hover:bg-blue-600"
          >
            {item.name} - ${item.price}
          </button>
        ))}
      </div>

      <div className="bg-white p-4 rounded-xl shadow-md">
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={chartData}>
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="price" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
