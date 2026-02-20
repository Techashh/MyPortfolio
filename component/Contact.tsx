"use client";

import { Phone, Mail, Github } from "lucide-react";

export default function Contact() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-black">
          Contact Me
        </h2>

        <p className="mt-4 text-gray-600 text-lg">
          Feel free to reach out to me through any of the following channels:
        </p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">

          {/* Contact Number */}
          <div className="group bg-white p-10 rounded-xl shadow-md border border-gray-200
                          hover:bg-black hover:shadow-2xl
                          transition-all duration-300">
            
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-black 
                              flex items-center justify-center 
                              text-white
                              group-hover:bg-white 
                              group-hover:text-black
                              transition-all duration-300">
                <Phone size={28} />
              </div>
            </div>

            <h3 className="mt-6 text-xl font-semibold 
                           text-black group-hover:text-white 
                           transition-colors duration-300">
              Contact Number
            </h3>

            <p className="mt-3 text-gray-600 text-lg 
                          group-hover:text-gray-300 
                          transition-colors duration-300">
              +2349036577265
            </p>
          </div>

          {/* Email */}
          <div className="group bg-white p-10 rounded-xl shadow-md border border-gray-200
                          hover:bg-black hover:shadow-2xl
                          transition-all duration-300">
            
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-black 
                              flex items-center justify-center 
                              text-white
                              group-hover:bg-white 
                              group-hover:text-black
                              transition-all duration-300">
                <Mail size={28} />
              </div>
            </div>

            <h3 className="mt-6 text-xl font-semibold 
                           text-black group-hover:text-white 
                           transition-colors duration-300">
              Email Address
            </h3>

            <p className="mt-3 text-gray-600 text-lg 
                          group-hover:text-gray-300 
                          transition-colors duration-300">
              sulaimansururah@gmail.com
            </p>
          </div>

          {/* GitHub */}
          <div className="group bg-white p-10 rounded-xl shadow-md border border-gray-200
                          hover:bg-black hover:shadow-2xl
                          transition-all duration-300">
            
            <div className="flex justify-center">
              <div className="w-20 h-20 rounded-full bg-black 
                              flex items-center justify-center 
                              text-white
                              group-hover:bg-white 
                              group-hover:text-black
                              transition-all duration-300">
                <Github size={28} />
              </div>
            </div>

            <h3 className="mt-6 text-xl font-semibold 
                           text-black group-hover:text-white 
                           transition-colors duration-300">
              GitHub Account
            </h3>

            <p className="mt-3 text-gray-600 text-lg 
                          group-hover:text-gray-300 
                          transition-colors duration-300">
              Techashh
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
