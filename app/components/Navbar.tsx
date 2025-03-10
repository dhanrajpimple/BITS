import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from "../assests/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<nav className="w-full p-4 border-[3px] border-transparent rounded-bl-2xl rounded-br-2xl overflow-hidden custom-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
           <img src={logo} alt="logo" className="h-24" />
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-primary">Home</a>
            <a href="#" className="text-gray-600 hover:text-purple-700">Solutions</a>
            <a href="#" className="text-gray-600 hover:text-purple-700">Services</a>
            <a href="#" className="text-gray-600 hover:text-purple-700">Company</a>
            <a href="#" className="text-gray-600 hover:text-purple-700">Contact</a>
            <button className="bg-primary text-white px-6 py-2 rounded-full hover:bg-purple-800">
              Get Started Today
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-600 hover:text-purple-700"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#" className="block px-3 py-2 text-purple-700">Home</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-purple-700">Solutions</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-purple-700">Services</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-purple-700">Company</a>
              <a href="#" className="block px-3 py-2 text-gray-600 hover:text-purple-700">Contact</a>
              <button className="w-full mt-4 bg-purple-700 text-white px-6 py-2 rounded-full hover:bg-purple-800">
                Get Started Today
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;