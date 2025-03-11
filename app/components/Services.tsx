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
    <div className="py-16 bg-white text-center w-full">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Divider */}
        <div className="flex items-center justify-center mb-8">
          <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-[2px] w-16 sm:w-28 md:w-40 lg:w-64 bg-primary"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mx-4">
            Experts for Your Digital Workspace
          </h2>
          <div className="h-[2px] w-16 sm:w-28 md:w-40 lg:w-64 bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-primary"></div>
        </div>

        {/* Subtitle */}
        <p className="text-gray-600 max-w-3xl mx-auto mb-8 text-sm sm:text-base md:text-lg">
          We are a skilled team of developers and consultants focused on digital
          solutions. Our blend of creativity and technical know-how drives
          effective digital transformation for businesses.
        </p>

        {/* Services Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          {services.map((service, index) => (
            <button
              key={index}
              className="border border-black text-primary px-5 py-2 rounded-full text-sm sm:text-base font-medium hover:bg-purple-700 hover:text-white transition-all duration-300"
            >
              {service}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
