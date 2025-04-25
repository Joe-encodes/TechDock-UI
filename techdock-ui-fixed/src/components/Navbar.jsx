import React, { useState } from "react";
import { Link } from "react-router-dom";

const navItems = [
  { name: "Dashboard", to: "/" },
  { name: "Devices", to: "/devices" },
  { name: "Security", to: "/security" },
  { name: "Energy", to: "/energy" },
  { name: "Notifications", to: "/notifications" },
  { name: "Profile", to: "/profile" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-2xl font-serif">TechDock Mini</div>
        {/* Hamburger */}
        <button
          className="md:hidden p-2 hover:bg-gray-200 rounded"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        {/* Menu */}
        <ul
          className={`${
            open ? "block" : "hidden"
          } md:flex space-y-2 md:space-y-0 md:space-x-6`}
        >
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                to={item.to}
                className="block px-3 py-2 rounded hover:bg-blue-100 transition-colors"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
