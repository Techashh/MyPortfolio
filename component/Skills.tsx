"use client";

import { useState } from "react";

export default function Page() {
  const [active, setActive] = useState("experience");

  return (
    <div className="flex flex-col md:flex-row min-h-screen bg-gray-100">
      {/* LEFT SIDEBAR */}
      <aside className="w-full md:w-64 bg-white shadow-md md:sticky md:top-0 md:h-screen flex md:flex-col justify-center">
        <nav className="flex md:flex-col justify-center md:justify-start gap-6 md:space-y-6 px-6 md:px-8 py-6 md:py-0">
          <button
            onClick={() => setActive("education")}
            className={`block text-left font-medium ${
              active === "education" ? "text-black" : "text-gray-500"
            }`}
          >
            Education
          </button>

          <button
            onClick={() => setActive("experience")}
            className={`block text-left font-medium ${
              active === "experience" ? "text-black" : "text-gray-500"
            }`}
          >
            Experience
          </button>

          <button
            onClick={() => setActive("skill")}
            className={`block text-left font-medium ${
              active === "skill" ? "text-black" : "text-gray-500"
            }`}
          >
            Skill
          </button>
        </nav>
      </aside>

      {/* RIGHT CONTENT */}
      <main className="flex-1 p-6 md:p-12 overflow-y-auto md:h-screen">
        {/* ================= EDUCATION ================= */}
        {active === "education" && (
          <main className="flex-1 py-16">
            <h2 className="text-3xl font-bold mb-12">Education</h2>

            {/* EDUCATION ITEM 1 */}
            <div className="flex flex-col sm:flex-row gap-8 mb-12">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14v6" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm text-gray-500 mb-2">2020 – 2024</p>

                <h3 className="text-2xl font-semibold mb-2">
                  Higher National Diploma (HND) in Computer Science
                </h3>

                <p className="font-semibold text-gray-700 mb-4">
                  Federal School of Statistics
                </p>

                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  I studied Computer Science, which gave me a solid foundation
                  in programming, algorithms, and software development. Through
                  hands-on projects and collaborative work, I strengthened my
                  technical skills, problem-solving abilities, and teamwork,
                  preparing me to build impactful tech solutions.
                </p>
              </div>
            </div>

            <hr className="border-gray-300 my-10" />

            {/* EDUCATION ITEM 2 */}
            <div className="flex flex-col sm:flex-row gap-8 mb-12">
              {/* Icon */}
              <div className="flex-shrink-0">
                <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14v6" />
                  </svg>
                </div>
              </div>

              {/* Content */}
              <div>
                <p className="text-sm text-gray-500 mb-2">2014 – 2020</p>

                <h3 className="text-2xl font-semibold mb-2">
                  Senior Secondary Certificate
                </h3>

                <p className="font-semibold text-gray-700 mb-4">
                  Eleta High School, Ibadan.
                </p>

                <p className="text-gray-600 leading-relaxed max-w-3xl">
                  During my secondary school years, I took on leadership roles
                  as a prefect and actively participated in academic and
                  extracurricular activities, which helped me develop
                  discipline, responsibility, and teamwork skills that have
                  shaped my approach to learning and growth in my studies.
                </p>
              </div>
            </div>
          </main>
        )}

        {/* ================= EXPERIENCE ================= */}
        {active === "experience" && (
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-10">Experience</h2>

            {[
              {
                date: "2022 – till date",
                title: "Web App & Shopify Store Designer",
                company: "Upwork,Fiverr & Social media",
                desc: "Designed and developed responsive web applications and Shopify stores. Implemented custom themes, plugins, and integrations, managed content, leveraged SEO, created interactive designs, collaborated with clients, and optimized site performance.",
              },
              {
                date: "2022 – till date",
                title: "Store Designer",
                company: "Upwork,Fiverr & Social media",
                desc: "Optimized store layouts and merchandising strategies, managed Shopify store operations, developed innovative solutions for efficiency, guided clients on branding and marketing, and monitored store performance metrics to maximize ROI.",
              },
              {
                date: "2022 – till date",
                title: "Web/App Content Manager",
                company: "Upwork & Fiverr",
                desc: "Developed and managed web app and store content, ensuring alignment with client branding. Created interactive and visually appealing designs to drive conversions.",
              },
              {
                date: "2022 – till date",
                title: "E-Commerce Consultant",
                company: "Freelancing",
                desc: "Optimized paid advertising campaigns using data-driven strategies, researched competitor pricing and products, executed sales promotions, expanded client web presence through social media and SEO, and maintained up-to-date industry knowledge.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="mb-12 border-b pb-8 flex flex-col sm:flex-row gap-4"
              >
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-white"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14v6" />
                    </svg>
                  </div>
                </div>

                {/* Text Content */}
                <div className="flex-1 pl-0 sm:pl-[20px]">
                  <p className="text-sm text-gray-500 mb-2">{item.date}</p>
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="font-medium text-gray-700 mb-3">{item.company}</p>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </section>
        )}

        {/* ================= SKILLS ================= */}
        {active === "skill" && (
          <section>
            <h2 className="text-3xl font-bold mb-10">Skill</h2>

            {/* Circular Skills */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {[
                { name: "HTML", percent: 90 },
                { name: "CSS", percent: 80 },
                { name: "JavaScript", percent: 70 },
              ].map((skill, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-lg shadow-md text-center"
                >
                  <h4 className="font-semibold mb-6">{skill.name}</h4>

                  <div className="relative w-40 h-40 mx-auto">
                    <svg className="w-full h-full rotate-[-90deg]">
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="#e5e7eb"
                        strokeWidth="10"
                        fill="transparent"
                      />
                      <circle
                        cx="80"
                        cy="80"
                        r="70"
                        stroke="black"
                        strokeWidth="10"
                        fill="transparent"
                        strokeDasharray={440}
                        strokeDashoffset={440 - (440 * skill.percent) / 100}
                        strokeLinecap="round"
                      />
                    </svg>

                    <div className="absolute inset-0 flex items-center justify-center text-3xl font-bold">
                      {skill.percent}%
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Linear Skills */}
            <div className="grid md:grid-cols-2 gap-10">
              {[
                { name: "HTML", percent: 90 },
                { name: "CSS/SCSS", percent: 80 },
                { name: "JavaScript", percent: 75 },
                { name: "Bootstrap", percent: 50 },
                { name: "PHP", percent: 50 },
                { name: "React Framework", percent: 75 },
                { name: "API Integration", percent: 70 },
                { name: "MySQL Database", percent: 75 },
              ].map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium">{skill.name}</span>
                    <span className="font-medium">{skill.percent}%</span>
                  </div>

                  <div className="w-full h-2 bg-gray-200 rounded">
                    <div
                      className="h-2 bg-black rounded"
                      style={{ width: `${skill.percent}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  );
}
