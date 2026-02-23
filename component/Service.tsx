"use client";

import { Code2, Smartphone, Paintbrush, Settings, Gauge, FilePenLine,
  Globe, Bug, TrendingUp, ShoppingCart, Store } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Code2 size={28} />,
      title: "Front-End Web Development",
      desc: "Creating responsive, mobile-friendly websites using HTML, CSS, and JavaScript.",
    },
    {
      icon: <Smartphone size={28} />,
      title: "Single-Page Applications (SPAs)",
      desc: "Building dynamic, fast, and interactive SPAs using React.",
    },
    {
      icon: <Paintbrush size={28} />,
      title: "UI/UX Design Implementation",
      desc: "Transforming UI/UX designs into fully functioning web interfaces.",
    },
    {
      icon: <Settings size={28} />,
      title: "Custom Component Development",
      desc: "Creating reusable and optimized React components tailored to your clients' needs.",
    },
    {
      icon: <Gauge size={28} />,
      title: "Performance Optimization",
      desc: "Speeding up website load times and improving performance metrics.",
    },
    {
      icon: <FilePenLine size={28} />,
      title: "Code Refactoring & Optimization",
      desc: "Enhancing and cleaning up existing codebases to improve maintainability and performance.",
    },
    {
      icon: <Globe size={28} />,
      title: "SEO-Friendly Development",
      desc: "Developing websites optimized for search engine visibility (SEO).",
    },
    {
      icon: <Bug size={28} />,
      title: "Testing and Debugging",
      desc: "Writing unit tests and debugging web applications to fix issues.",
    },
    {
      icon: <TrendingUp size={28} />,
      title: "Web Animations",
      desc: "Adding subtle animations and transitions using CSS and JavaScript.",
    },
    {
      icon: <ShoppingCart size={28} />,
      title: "Shopify Store Design",
      desc: "Designing modern, conversion-focused Shopify stores with clean layouts and seamless user experience.",
    },
    {
      icon: <Store size={28} />,
      title: "Shopify Store Customization",
      desc: "Customizing Shopify themes, sections, and functionality to match your brand and business goals.",
    },
  ];

  return (
    <section className="bg-gray-100 py-24 px-6">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <h2 className="text-4xl font-bold text-black">
          My Services
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Your Vision, Coded to Perfection
        </p>

        {/* Grid */}
        <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white p-10 rounded-xl shadow-md
                         hover:bg-black hover:shadow-2xl
                         active:bg-black active:shadow-2xl
                         focus-within:bg-black focus-within:shadow-2xl
                         transition-all duration-300 ease-out"
            >
              {/* Icon */}
              <div className="flex justify-center text-black 
                              group-hover:text-white 
                              group-active:text-white 
                              group-focus-within:text-white 
                              transition-colors duration-300">
                {service.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-sm tracking-[0.25em] uppercase font-semibold 
                             text-black 
                             group-hover:text-white 
                             group-active:text-white 
                             group-focus-within:text-white
                             transition-colors duration-300">
                {service.title}
              </h3>

              {/* Divider */}
              <div className="w-10 h-[2px] bg-black mx-auto my-4 
                              group-hover:bg-white 
                              group-active:bg-white 
                              group-focus-within:bg-white
                              transition-colors duration-300"></div>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed 
                            group-hover:text-gray-300 
                            group-active:text-gray-300 
                            group-focus-within:text-gray-300
                            transition-colors duration-300">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
