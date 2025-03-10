import React from "react";
import trasform from "../assests/transformation.jpeg"
import left from "../assests/arraow1.png"
import right from "../assests/arraow3.png"
const steps = [
  {
    title: "Advisory",
    subtitle: "Plan your Digital Transformation",
    description:
      "Work with our experts to form a clear picture of your current and future-state IT capabilities. This process enables you to build consensus between business and IT on your journey to value.",
    image: trasform,
    align: "left",
  },
  {
    title: "Solution Realization",
    subtitle: "Build your Digital Solutions",
    description:
      "We help you enable the features and functions of your software to maximize its value. Get Solutions up and running smoothly. Optimized for your environment, and adopted by your users.",
    image: trasform,
    align: "right",
  },
  {
    title: "Optimization",
    subtitle: "Run and Optimize your Digital Investment",
    description:
      "Our managed services keep your staff focused on important business initiatives. The BITS experts handle technical product issues and help you to realize the full ROI of your technology solutions.",
    image: trasform,
    align: "left",
  },
];

export default function TransformationJourney() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <h1 className="text-3xl md:text-5xl text-black font-bold text-center mb-12">
          Your Transformation Journey
        </h1>

        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col ${
              step.align === "right" ? "md:flex-row-reverse bg-gradient-to-l from-[#F0F0F0] to-[#FFFFFF] rounded-tr-full rounded-br-full " : "md:flex-row bg-gradient-to-r from-[#F0F0F0] to-[#FFFFFF] rounded-tl-full rounded-bl-full"
            } items-center gap-6 md:gap-12 mb-16`}
          >
            {/* Circular Image */}
            <div   className={`w-36 h-36 md:w-48 md:h-48 flex-shrink-0 rounded-tl-full rounded-tr-full 
    ${step.align === "left" ? "rounded-bl-full rounded-br-none" : "rounded-bl-none rounded-br-full"}
    overflow-hidden shadow-lg`}>
              <img
                src={step.image}
                alt={step.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Text Content */}
            <div className={`flex   align-middle items-center   ${step.align === "right" ? "md:flex-row-reverse " : ""}`}>
              <div className={`w-full ${step.align === "left" ? "text-left" : "text-right"}`}>
              <h2 className="text-2xl md:text-3xl font-bold text-purple-700">
                {step.title}
              </h2>
              <h3 className="text-lg md:text-xl text-gray-600 font-medium mb-3">
                {step.subtitle}
              </h3>
              </div>
              <p className={`text-gray-600 text-sm md:text-base ${step.align === "left" ? "text-left" : "text-right"}`}>
                {step.description}
              </p>
            </div>
            <img
  src={step.align === "left" ? left : right}
  className={`${index !== steps.length - 1 ? "block mt-10" : "hidden"}`}
/>

          </div>
        ))}

      
      </div>
    </div>
  );
}
