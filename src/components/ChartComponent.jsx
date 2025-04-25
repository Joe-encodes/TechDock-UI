// src/components/ChartComponent.jsx
import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const sampleData = [
  { time: "Mon", usage: 30 },
  { time: "Tue", usage: 45 },
  { time: "Wed", usage: 28 },
  { time: "Thu", usage: 60 },
  { time: "Fri", usage: 50 },
];

export default function ChartComponent() {
  return (
    <div className="bg-white rounded-lg shadow p-4">
      <h2 className="font-semibold mb-2">Weekly Energy Usage</h2>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={sampleData}>
          <XAxis dataKey="time" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="usage" stroke="#3b82f6" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
