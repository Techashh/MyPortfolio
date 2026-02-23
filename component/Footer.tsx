"use client";

import Link from "next/link";
import {
  Home,
  User,
  Briefcase,
  Folder,
  Phone,
  MapPin,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-300 pt-20 pb-10 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">

        {/* About */}
        <div className="flex flex-col">
          <h3 className="text-2xl font-semibold text-white mb-6">
            About
          </h3>

          <p className="leading-relaxed text-gray-400 max-w-sm">
            I’m Sulaiman Sururah Asabi, a dedicated software developer
            with a solid foundation in web development and growing
            expertise in machine learning. My passion for technology
            stems from a deep curiosity about the digital world,
            driving me to create seamless user experiences and
            continuously improve my skills.
          </p>
        </div>

        {/* Links */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Links
          </h3>

          <ul className="space-y-4">
            <li>
              <Link
                href="#home"
                className="flex items-center justify-center gap-3 hover:text-white transition"
              >
                <Home size={18} />
                Home
              </Link>
            </li>

            <li>
              <Link
                href="#about"
                className="flex items-center justify-center gap-3 hover:text-white transition"
              >
                <User size={18} />
                About
              </Link>
            </li>

            <li>
              <Link
                href="#service"
                className="flex items-center justify-center gap-3 hover:text-white transition"
              >
                <Briefcase size={18} />
                Services
              </Link>
            </li>

            <li>
              <Link
                href="#project"
                className="flex items-center justify-center gap-3 hover:text-white transition"
              >
                <Folder size={18} />
                Projects
              </Link>
            </li>

            <li>
              <Link
                href="#contact"
                className="flex items-center justify-center gap-3 hover:text-white transition"
              >
                <Phone size={18} />
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-semibold text-white mb-6">
            Have a Question?
          </h3>

          <ul className="space-y-5">
            <li className="flex items-center justify-center gap-3">
              <MapPin size={18} className="text-gray-400" />
              <span>Abuja, Nigeria</span>
            </li>

            <li className="flex items-center justify-center gap-3">
              <Phone size={18} className="text-gray-400" />
              <span>+234703 314 9596</span>
            </li>

            <li className="flex items-center justify-center gap-3">
              <Mail size={18} className="text-gray-400" />
              <Link href="mailto:sulaimansururah@gmail.com" className="text-gray-400 hover:text-white transition">
                sulaimansururah@gmail.com
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Line */}
      <div className="mt-16 border-t border-gray-800 pt-6 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Sururah. All rights reserved.
      </div>
    </footer>
  );
}
