import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout"; // Ensure this path is correct
import Homepage from "./pages/Homepage"; // Ensure this path is correct
import Devices from "./pages/Devices"; // Ensure this path is correct
import Security from "./pages/Security"; // Ensure this path is correct
import Energy from "./pages/Energy"; // Ensure this path is correct
import Notifications from "./pages/Notifications"; // Ensure this path is correct
import Profile from "./pages/Profile"; // Ensure this path is correct

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="devices" element={<Devices />} />
        <Route path="security" element={<Security />} />
        <Route path="energy" element={<Energy />} />
        <Route path="notifications" element={<Notifications />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
}