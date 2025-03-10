import React from "react";

const services = [
  {
    title: "Cloud Architecture & Deployment",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Digital Marketing",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "DC Migration",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Business Continuity & Disaster Recovery",
    image:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Data Analytics",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Security/ Compliance/ Governance",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "Productivity & Collaboration",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
  {
    title: "IT Consulting Services",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
  },
];

const ServicesGrid = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title with Dividers */}
        <div className="flex items-center justify-center mb-6">
        <div className="h-2 w-2 rounded-full bg-primary"></div>
          <div className="h-[2px] w-72 bg-primary"></div>
          <h2 className="text-2xl sm:text-3xl font-bold text-primary mx-4">
          THE BITS Professional Services Offerings 
          </h2>
          <div className="h-[2px] w-72 bg-primary"></div>
          <div className="h-2 w-2 rounded-full bg-primary"></div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
           <div
           key={index}
           className="relative overflow-hidden rounded-lg shadow-lg group cursor-pointer"
         >
           {/* Image */}
           <img
             src={service.image}
             alt={service.title}
             className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
           />
           
           {/* Bottom Overlay */}
           <div className="absolute inset-x-0 bottom-0 h-[50%] bg-black/50 transition-opacity duration-300 group-hover:bg-black/60 flex items-end">
             {/* Title inside overlay */}
             <h3 className="p-4 text-white font-semibold text-lg w-full">
               {service.title}
             </h3>
           </div>
         </div>
         
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
