import React from "react";

const services = [
  "Communication Tech",
  "Data",
  "Internet Access",
  "Software",
  "Hardware",
  "Transactions",
];

export default function Services() {
  return (
    <div className="py-16 bg-white text-center">
      <div className="w-[85%] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Divider */}
        <div className="flex items-center justify-center mb-6">
        <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-[2px] w-72 bg-primary"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mx-4">
            Experts for Your Digital Workspace
          </h2>
          <div className="h-[2px] w-72 bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-primary"></div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-6">
          We are a skilled team of developers and consultants focused on digital
          solutions. Our blend of creativity and technical know-how drives
          effective digital transformation for businesses.
        </p>

        {/* Services Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <button
              key={index}
              className="border border-black text-primary px-4 py-2 rounded-full text-sm font-medium hover:bg-purple-700 hover:text-white transition"
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
