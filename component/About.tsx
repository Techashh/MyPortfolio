"use client";

import Image from "next/image";

export default function Home() {
  return (
    <section className="max-w-7xl mx-auto px-5 sm:px-6 py-16 sm:py-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-14 items-center">

        {/* Image */}
        <div className="flex justify-center md:justify-start">
          <div className="relative w-[240px] h-[320px] sm:w-[280px] sm:h-[380px]
           md:w-[340px] md:h-[460px] rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="/Img1.jpeg"
              alt="Sulaiman Sururah Asabi"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5 sm:mb-6">
            About Me
          </h2>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-5 sm:mb-6">
            I’m a software developer passionate about creating seamless and engaging web experiences.
            I love tackling challenging problems and transforming ideas into practical,
            user-friendly solutions.
          </p>

          <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-8 sm:mb-10">
            Continuously exploring new technologies, I strive to refine my skills and deliver
            high-quality, efficient, and maintainable code that drives impactful digital experiences.
          </p>

          {/* Info Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6 text-sm sm:text-base">
            <div>
              <span className="font-semibold text-gray-900">Name:</span>{" "}
              <span className="text-gray-600">Sulaiman Sururah Asabi</span>
            </div>

            <div>
              <span className="font-semibold text-gray-900">Email:</span>{" "}
              <span className="text-gray-600 break-all">
                sulaimansururah@gmail.com
              </span>
            </div>

            <div>
              <span className="font-semibold text-gray-900">Phone:</span>{" "}
              <span className="text-gray-600">09036577265</span>
            </div>

            <div>
              <span className="font-semibold text-gray-900">Location:</span>{" "}
              <span className="text-gray-600">Nigeria</span>
            </div>

            <div>
              <span className="font-semibold text-gray-900">Interests:</span>{" "}
              <span className="text-gray-600">Coding, Problem Solving</span>
            </div>

            <div>
              <span className="font-semibold text-gray-900">Hobbies:</span>{" "}
              <span className="text-gray-600">Basketball, Learning</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
