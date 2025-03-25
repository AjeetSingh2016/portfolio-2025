"use client";

import portfolio from "../data/portfolio.json";
import { useState } from "react";
import Image from "next/image";

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = portfolio.projects.filter(
    (project) => filter === "All" || project.stack === filter
  );

  return (
    <section id="portfolio" className="py-20 px-4 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl space-y-8">
        <h2 className="text-3xl font-semibold uppercase tracking-wider mb-12 text-center relative">
          <span className="relative inline-block">
            My Portfolio
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1/2 h-1 bg-green-500"></span>
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {["All", "Next JS", "React Native", "React Js"].map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 text-sm sm:px-6 sm:py-3 sm:text-lg font-semibold rounded-full transition-all duration-300 ease-in-out transform hover:scale-105 ${
                filter === tech
                  ? "bg-gradient-to-r from-green-400 to-blue-500 text-white shadow-lg"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {tech}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, idx) => (
            <div
              key={idx}
              className="flex flex-col overflow-hidden bg-gray-800 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2"
            >
              <div className="flex-1 flex flex-col">
                <a href={project.link} className="block cursor-pointer">
                  <img
                    src={project.image || "/default-image.jpg"}
                    alt={project.title}
                    className="w-full h-48 sm:h-64 object-cover object-center rounded-t-xl"
                  />
                </a>
                <div className="p-6 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-semibold text-green-400">
                      {project.title}
                    </h3>
                    <h4 className="text-xs sm:text-sm text-gray-400 mt-1">
                      {project.subtitle}
                    </h4>
                    <time className="font-sans text-xs text-gray-500 mt-2">
                      {project.stack}
                    </time>
                    <p className="text-gray-400 text-xs sm:text-sm mt-4">
                      {project.description}
                    </p>
                  </div>
                  {/* Technologies Section */}
                  <div className="py-3 flex flex-wrap gap-2 mt-auto justify-start items-center">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-2 py-1 text-xs text-white bg-green-500 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              {/* Footer with Buttons */}
              <div className="py-4 px-6 flex flex-col sm:flex-row justify-between gap-4 w-full rounded-b-xl mt-auto bg-gray-700">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-semibold flex flex-row justify-center items-center rounded-md bg-gray-800 px-4 py-2 gap-x-2 hover:bg-gray-900 transition-all duration-300"
                >
                  <img
                    src="https://img.icons8.com/sf-regular/48/FFFFFF/external-link.png"
                    alt="External Link Icon"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <span>View Project</span>
                </a>
                <a
                  href={project.source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white text-sm font-semibold flex flex-row justify-center items-center rounded-md bg-gray-800 px-4 py-2 gap-x-2 hover:bg-gray-900 transition-all duration-300"
                >
                  <img
                    src="https://img.icons8.com/ios/50/FFFFFF/globe--v1.png"
                    alt="External Link Icon"
                    className="w-4 h-4 sm:w-5 sm:h-5"
                  />
                  <span>View Source</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}