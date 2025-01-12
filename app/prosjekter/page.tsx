'use client';

import React from 'react';

const projects = [
  { title: 'Moderne villa i Holmenkollen', year: 2024 },
  { title: 'Enebolig i Bærum', year: 2023 },
  { title: 'Moderne villa på Nordstrand', year: 2022 },
  { title: 'Leilighetskompleks på Grünerløkka', year: 2021 },
  { title: 'Funkisbolig på Ekeberg', year: 2020 },
  { title: 'Rekkehus i Lillestrøm', year: 2023 },
];

const ProjectsPage = () => {
  return (
    <div className="container">
      <h1>Våre Prosjekter</h1>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <div className="project-image-placeholder"></div>
            <h2>{project.title}</h2>
            <p>Ferdigstilt {project.year}</p>
          </div>
        ))}
      </div>

      <style jsx>{`
        .container {
          padding: 40px 20px;
        }
        .projects-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-left: 10%; /* Flytter grid-containeren mot høyre */
        }
        .project-card {
          border: 1px solid #ccc;
          padding: 20px;
          border-radius: 8px;
          text-align: center;
          background-color: #f9f9f9;
        }
        .project-image-placeholder {
          width: 100%;
          height: 200px;
          background-color: #eee;
          margin-bottom: 20px;
        }
        h1 {
          text-align: left;  /* Endrer fra center til left */
          font-size: 2.5rem;
          margin-bottom: 20px;
          position: relative;
          display: inline-block;
          margin-left: 10%;  /* Flytter overskriften til høyre */
        }
        h1::after {
          content: '';
          display: block;
          width: 100%;
          height: 4px;
          background-color: black;
          position: absolute;
          bottom: -5px;
          left: 0;
        }
      `}</style>
    </div>
  );
};

export default ProjectsPage;
 