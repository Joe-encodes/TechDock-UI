// src/components/DeviceStatusTable.jsx
import React from "react";

const DeviceStatusTable = ({ devices }) => (
  <div className="bg-white p-6 rounded-xl shadow-sm mb-12">
    <h2 className="text-xl font-semibold mb-6">Device Status</h2>
    <div className="space-y-4">
      {devices.map(device => (
        <div key={device.id} className="flex justify-between items-center pb-2 border-b">
          <span className="text-gray-700">{device.name}</span>
          <span className="text-gray-600">{device.status}</span>
          <span className="text-purple-600">{device.mode}</span>
        </div>
      ))}
    </div>
  </div>
);

export default DeviceStatusTable;