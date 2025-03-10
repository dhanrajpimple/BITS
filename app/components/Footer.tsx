import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import logo from "../assests/footer_logo.png"
const Footer = () => {
  return (
    <footer className="bg-primary text-white py-12">
      <div className="min-w-full mx-auto  items-center align-middle flex flex-col">
        {/* Top Section */}
        <div className="grid w-full px-20 items-start grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
          {/* Column 1 - Company */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">About</a></li>
              <li><a href="#" className="hover:text-gray-300">Carriers</a></li>
              <li><a href="#" className="hover:text-gray-300">Partners</a></li>
              <li><a href="#" className="hover:text-gray-300">Contact Us</a></li>
              <li><a href="#" className="hover:text-gray-300">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Column 2 - Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Professional Services</a></li>
              <li><a href="#" className="hover:text-gray-300">Manage Infrastructure</a></li>
              <li><a href="#" className="hover:text-gray-300">Manage Security</a></li>
            </ul>
          </div>

          {/* Column 3 - Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Solutions</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:text-gray-300">Cloud</a></li>
              <li><a href="#" className="hover:text-gray-300">Infrastructure</a></li>
              <li><a href="#" className="hover:text-gray-300">Security</a></li>
            </ul>
          </div>

          {/* Column 4 - Branding & Social Icons */}
          <div className="flex flex-col items-center  md:items-end">
           <img src ={logo} className="h-20"/>
            <div className="flex space-x-4 text-xl mt-10">
              <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
              <a href="#" className="hover:text-gray-300"><FaTwitter /></a>
              <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
              <a href="#" className="hover:text-gray-300"><FaLinkedin /></a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 text-center text-sm top-shadow py-4 min-w-full">
  © 2025 THE BITS. All rights reserved.
</div>


      </div>
    </footer>
  );
};

export default Footer;
