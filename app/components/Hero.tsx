import React, { useState, useEffect } from "react";
import slide1 from "../assests/slide1.png";
import slide2 from "../assests/slide2.png";
import slide3 from "../assests/slide3.png";
import slide4 from "../assests/slide4.png";
const slides = [
  {
    bgImage: slide1,
    heading: "Seamless Technology, Limitless Growth.",
    subText: "Empowering businesses with smart solutions and expert-driven digital transformation.",
  },
  {
    bgImage: slide2,
    heading: "Innovate Your Future Today.",
    subText: "Unlock the power of AI and automation for business success.",
  },
  {
    bgImage: slide3,
    heading: "Secure, Scalable, and Smart Solutions.",
    subText: "Protect your business with top-tier security and scalable technologies.",
  },
  {
    bgImage: slide4,
    heading: "Secure, Scalable, and Smart Solutions.",
    subText: "Protect your business with top-tier security and scalable technologies.",
  }
];

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
      }, 5000);
      return () => clearInterval(interval);
    }, []);
  
    return (
      <div className="flex flex-col items-center justify-center bg-white py-8 min-w-full">
        {/* Slider Container with White Background & Rounded Corners */}
        <div className="relative w-[85%]  h-[200px] md:h-[300px] lg:h-[400px] rounded-3xl overflow-hidden shadow-lg">
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-all duration-700"
            style={{ backgroundImage: `url(${slides[currentIndex].bgImage})` }}
          >
            <div className="absolute inset-0 bg-black/50 rounded-3xl"></div>
          </div>
  
          {/* Text Content */}
          <div className="relative z-10 flex flex-col items-center justify-center text-center text-white px-6 h-full">
            <h2 className="text-2xl md:text-5xl font-bold">
              {slides[currentIndex].heading}
            </h2>
            <p className="mt-2 md:mt-4 text-sm md:text-lg max-w-2xl">
              {slides[currentIndex].subText}
            </p>
            <button className="mt-6 px-6 py-3 bg-primary hover:bg-purple-700 text-white font-semibold rounded-full transition">
              Get Started Today
            </button>
          </div>
        </div>
  
        {/* Dots Indicator (Outside the Slider) */}
        <div className="mt-4 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`h-3 w-3 rounded-full transition-all ${
                currentIndex === index ? "bg-primary w-6" : "bg-gray-400"
              }`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    );
  }
  