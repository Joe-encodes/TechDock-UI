// src/components/Layout.jsx
import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col font-sans bg-gray-50">
      <Navbar />
      <div className="flex flex-1">
        <main className="flex-1 p-6">
          <Outlet /> {/* This is where your pages will render */}
        </main>
      </div>
      <Footer />
    </div>
  );
}