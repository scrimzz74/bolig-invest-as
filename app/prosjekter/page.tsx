import React from "react";
import { client } from "@/lib/sanity";
import Project from "@/types/project";
import { PortableText } from "next-sanity";
import Image from "next/image";
import Link from "next/link";

async function getData() {
  const query = `*[_type == 'project'] {
    title,
    _id,
    link,
    description,
    year,
    category[]->{
      title
    },
    "imageUrl": image.asset->url
  }`;

  const data = await client.fetch(query);

  return data;
}

const ProjectsPage = async () => {
  const data: Project[] = await getData();

  return (
    <div className="px-8 py-12 bg-gray-50 min-h-screen">
      <h1 className="text-5xl font-bold text-center text-gray-800 relative inline-block mb-10 ml-12">
        Våre Prosjekter
        <span className="absolute bottom-[-10px] left-1/2 transform -translate-x-1/2 block w-24 h-1 bg-blue-500"></span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto max-w-7xl">
        {data.map((project) => (
          <Link
            href={project.link}
            key={project._id}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-xl hover:scale-105 transition-transform duration-300"
          >
            <div className="w-full h-56 mb-4 relative">
              {project.imageUrl ? (
                <Image 
                  src={project.imageUrl} 
                  alt="Project image" 
                  layout="intrinsic" 
                  width={500} 
                  height={300} 
                  className="object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-r from-blue-300 to-blue-500 flex items-center justify-center text-gray-600"></div>
              )}
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                {project.title}
              </h2>
              <div className="text-gray-500 text-lg">
                Ferdigstilt {project.year}
              </div>
              <PortableText value={project.description} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProjectsPage;
