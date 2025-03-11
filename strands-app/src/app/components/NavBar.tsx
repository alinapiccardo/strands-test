import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="bg-slate-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <img src="/apple-touch-icon.png" alt="Logo" className="h-10 w-10 mr-4" />
          <span className="text-white text-xl font-bold">Strands Test</span>
        </div>
        <div className="flex space-x-4">
          <a href="#home" className="text-gray-300 hover:text-white">
            Home
          </a>
          <a href="#about" className="text-gray-300 hover:text-white">
            About
          </a>
          <a href="#contact" className="text-gray-300 hover:text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;