//AhriMain.tsx
import React from "react";
import ProjectCard from "../sub/AhriCard";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      src: "/ahri.jpg",
      title: "Weather APP",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/Pages/Ahri.tsx"
    },
  ];

  return (
    <div className="flex flex-col items-center justify-center py-20" id="projects">
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10">
        {projects.map((project, index) => (
          <div key={index}>
            <ProjectCard
              src={project.src}
              title={project.title}
              description={project.description}
              link={project.link}
            />
            <Link href="/AhriBio">
              <button className="cursor-pointer bg-purple-500 text-white px-4 py-2 mt-4 rounded hover:bg-purple-600">
                Bio
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

