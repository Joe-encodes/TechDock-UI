// src/pages/Homepage.jsx
import React from 'react';
import { 
  LayoutDashboard, 
  PlugZap, 
  Shield, 
  BatteryCharging, 
  Bell, 
  User,
  Airplay,
  Monitor,
  Lightbulb,
  Refrigerator 
} from 'lucide-react';
import ChartComponent from '../components/ChartComponent';
import DeviceCard from '../components/DeviceCard';
 import DeviceStatusTable from '../components/DeviceStatusTable';
import QuickControls from '../components/QuickControls';

const Homepage = () => {
  const devices = [
    { id: 1, icon: Airplay, name: 'AC', location: 'Living Room', status: 'On', mode: 'Eco' },
    { id: 2, icon: Monitor, name: 'TV', location: 'Bedroom', status: 'Off', mode: 'Normal' },
    { id: 3, icon: Lightbulb, name: 'Lights', location: 'Kitchen', status: 'On', mode: 'Eco' },
    { id: 4, icon: Refrigerator, name: 'Fridge', location: 'Pantry', status: 'On', mode: 'Normal' },
  ];

  const navItems = [
    { icon: LayoutDashboard, label: 'Dashboard' },
    { icon: PlugZap, label: 'Devices' },
    { icon: Shield, label: 'Security' },
    { icon: BatteryCharging, label: 'Energy' },
    { icon: Bell, label: 'Notifications' },
    { icon: User, label: 'Profile' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <aside className="w-64 bg-white border-r">
        <div className="p-4">
          <h1 className="text-2xl font-serif mb-8">TechDock Mini</h1>
          <nav>
            {navItems.map((item, index) => (
              <button 
                key={index}
                className="w-full flex items-center space-x-3 p-3 hover:bg-purple-50 rounded-lg transition-colors"
              >
                <item.icon className="w-5 h-5 text-purple-600" />
                <span className="text-gray-700">{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </aside>

      <main className="flex-1 p-8">
        <h1 className="text-3xl font-serif mb-8">Connected Devices</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {devices.map(device => (
            <DeviceCard key={device.id} device={device} />
          ))}
        </div>

        <div className="bg-white p-6 rounded-xl shadow-sm mb-12">
          <h2 className="text-xl font-semibold mb-6">Power Usage</h2>
          <ChartComponent />
        </div>

        <DeviceStatusTable devices={devices} />
        <QuickControls />
      </main>
    </div>
  );
};

export default Homepage;