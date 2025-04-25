// src/components/DeviceCard.jsx
import React from "react";

const DeviceCard = ({ device }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow">
    <device.icon className="w-12 h-12 text-blue-500 mb-4" />
    <h3 className="text-lg font-semibold mb-1">{device.name}</h3>
    <p className="text-gray-500 mb-4">{device.location}</p>
    <div className="flex gap-2">
      <button 
        className={`px-4 py-2 rounded-lg text-sm ${
          device.status === 'On' 
            ? 'bg-green-500 text-white hover:bg-green-600' 
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        {device.status}
      </button>
      <button className="px-4 py-2 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 text-sm">
        Energy
      </button>
    </div>
  </div>
);

export default DeviceCard;


