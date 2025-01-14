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
    <div className="px-5 py-10">
      <h1 className="text-4xl font-semibold text-left ml-20 relative inline-block mb-5">
        Våre Prosjekter
        <span className="absolute bottom-[-5px] left-0 block w-full h-[4px] bg-black"></span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 ml-20">
        {projects.map((project, index) => (
          <div
            key={index}
            className="border border-gray-300 p-5 rounded-lg text-center bg-gray-100 overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <div className="w-full h-52 bg-gray-300 mb-5 transition-transform duration-300 hover:scale-110"></div>
            <h2 className="text-xl font-semibold">{project.title}</h2>
            <p className="text-gray-600">Ferdigstilt {project.year}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
