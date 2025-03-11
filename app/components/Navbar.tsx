import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assests/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full border-b border-blue-300 bg-white shadow-md rounded-b-3xl "  >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center md:h-24">
          {/* Logo */}
          <a href="/" className="flex items-center ">
            <img src={logo} alt="logo" className="h-10 m-2  md:h-20" />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            {["Home", "Solutions", "Services", "Company", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="text-gray-700 hover:text-purple-700 transition-colors"
                >
                  {item}
                </a>
              )
            )}
            <button className="bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800 transition">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-700 hover:text-purple-700 transition"
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden fixed inset-0 bg-white z-50 transform ${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } transition-transform duration-300`}
        >
          <div className="flex justify-between items-center p-4 border-b">
            <img src={logo} alt="logo" className="h-14" />
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-700 hover:text-purple-700 transition"
            >
              <X size={28} />
            </button>
          </div>
          <div className="p-4 space-y-4">
            {["Home", "Solutions", "Services", "Company", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href="#"
                  className="block text-gray-700 hover:text-purple-700 text-lg transition"
                >
                  {item}
                </a>
              )
            )}
            <button className="w-full bg-purple-700 text-white py-3 rounded-full hover:bg-purple-800 transition">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
