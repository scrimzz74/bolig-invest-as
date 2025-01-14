"use client";

import React from "react";

const projects = [
  { title: "Moderne villa i Holmenkollen", year: 2024 },
  { title: "Enebolig i Bærum", year: 2023 },
  { title: "Moderne villa på Nordstrand", year: 2022 },
  { title: "Leilighetskompleks på Grünerløkka", year: 2021 },
  { title: "Funkisbolig på Ekeberg", year: 2020 },
  { title: "Rekkehus i Lillestrøm", year: 2023 },
];

const ProjectsPage = () => {
  return (
    <div className="px-8 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-gray-800 relative inline-block mb-10 ml-12">
        Våre Prosjekter
        <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 block w-24 h-1 bg-blue-500"></span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full h-56 bg-gradient-to-r from-blue-300 to-blue-500 mb-4"></div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                {project.title}
              </h2>
              <p className="text-gray-500 text-lg">
                Ferdigstilt {project.year}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
