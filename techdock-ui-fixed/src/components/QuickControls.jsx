// src/components/QuickControls.jsx
import React from "react";

const QuickControls = () => (
  <div className="bg-white p-6 rounded-xl shadow-sm">
    <h2 className="text-xl font-semibold mb-6">Quick Control</h2>
    <div className="flex gap-4">
      <button className="px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors">
        All On
      </button>
      <button className="px-6 py-3 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors">
        All Off
      </button>
      <button className="px-6 py-3 border border-purple-600 text-purple-600 rounded-lg hover:bg-purple-50 transition-colors">
        Eco Mode
      </button>
    </div>
  </div>
);

export default QuickControls;