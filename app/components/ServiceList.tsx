import React, { useState } from "react";
import security from "~/assests/security.png";
import manage from "~/assests/Manage.jpeg";
import professional from "~/assests/professinal.jpeg";
import security1 from "~/assests/security1.jpeg";
import managed1 from "~/assests/manage2.jpeg";
import cloud from "~/assests/cloud1.png";
import mdr from "~/assests/mdr.jpeg";
import edr from "~/assests/edr.jpeg";
import monitor from "~/assests/monitoring.jpeg";
import strategy from "~/assests/strategy.jpeg";
import vdi from "~/assests/vid.jpeg";
import farewalls from "~/assests/firewalls.jpeg";
import backup from "~/assests/backup.jpeg";
import cloudinfra from "~/assests/cloudinfa.jpeg";

// Default category data for Managed Security
const SecurityData = [
  { title: "Security Monitoring", image: security1 },
  { title: "Managed Detection & Response", image: managed1 },
  { title: "Cloud", image: cloud },
];

const ServiceList = () => {
  // State for selected service items with default set to SecurityData
  const [selected, setSelected] = useState<{ title: string; image: string }[]>(SecurityData);
  
  // Main navigation for service categories
  const select = [
    { id: 1, name: "Managed Security", image: security },
    { id: 2, name: "Manage Infrastructure", image: manage },
    { id: 3, name: "Professional Services", image: professional },
  ];

  // Data for each category
  const Infrastructure = [
    { title: "Infrastructure Monitoring", image: monitor },
    { title: "Infrastructure Management & Strategy", image: strategy },
    { title: "Managed VDI", image: vdi },
    { title: "Managed Firewalls", image: farewalls },
    { title: "Managed and Backup and Disaster Recovery", image: backup },
    { title: "Cloud Infrastructure Management", image: cloudinfra },
  ];

  const Services = [
    { title: "EDR (Endpoint Detection and Response)", image: edr },
    { title: "MDR (Managed Detection and Response)", image: mdr },
  ];

  // Update the selected array based on clicked category
  const handleClick = (title: string) => {
    if (title === "Managed Security") {
      setSelected(SecurityData);
    } else if (title === "Manage Infrastructure") {
      setSelected(Infrastructure);
    } else {
      setSelected(Services);
    }
  };

  return (
    <>
      {/* Service Category Selection */}
      <div className="flex w-full justify-center gap-8 flex-wrap px-4">
        {select.map((serviceItem, index) => (
          <div
            key={index}
            className="relative rounded-lg overflow-hidden w-60 h-48 cursor-pointer shadow-lg mb-4"
            onClick={() => handleClick(serviceItem.name)}
          >
            {/* Image Container with fixed aspect ratio */}
            <div className="relative pb-[83.33%]">
              <div
                className="absolute inset-0 w-full h-full"
                style={{
                  backgroundImage: `url(${serviceItem.image})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            {/* Overlay with Title */}
            <div className="absolute inset-x-0 bottom-0 h-[25%] bg-black/80 flex justify-center items-center text-white text-lg font-normal">
              {serviceItem.name}
            </div>
          </div>
        ))}
      </div>

      {/* Display Selected Items */}
      <div className="flex flex-col">
        {selected.map((item, idx) => (
          <div
            key={idx}
            className="relative flex items-center h-20 overflow-hidden shadow-lg bg-gradient-to-r from-[#F0F0F0] to-[#FFFFFF] rounded-l-full p-4"
          >
            <img
              src={item.image}
              alt={item.title}
              className="min-h-full w-24 rounded-tr-full"
            />
            <p className="text-black ml-4">{item.title}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServiceList;
