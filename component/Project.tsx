"use client";

import Link from "next/link";
import Image from "next/image";

export default function ProjectsSection() {
  const projects = [
    {
      title: "Hospital Mgt Sys",
      image: "/hosptalmgt.png",
      link: "#",
    },
    {
      title: "Currency Exchange",
      image: "/Worldremit.png",
      link: "#",
    },
    {
      title: "Hotel Mgt Sys",
      image: "/Hotel.png",
      link: "#",
    },
    {
      title: "Import and Export",
      image: "/Apexline.png",
      link: "#",
    },
    {
      title: "School Mgt Sys",
      image: "/project5.png",
      link: "#",
    },
    {
      title: "Space Travel",
      image: "/project6.png",
      link: "#",
    },
  ];

  return (
    <section className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <h2 className="text-4xl font-bold text-center mb-12">
          My Projects
        </h2>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              href={project.link}
              key={index}
              className="group bg-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative w-full h-56 bg-gray-200">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-500"
                />
              </div>

              {/* Title */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold group-hover:text-gray-700 transition">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
