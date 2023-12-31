// Ahri.tsx
import { useEffect } from 'react';
import AhriElement from "@/components/main/AhriElement";
import AhriMain from "@/components/main/AhriMain";
import ProjectCard from "@/components/sub/ProjectCard";
import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/main/Navbar";
import Footer from "@/components/main/Footer";

const Ahri = () => {
  const projects = [
    {
      src: "/ahri.jpg",
      title: "Weather APP",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/Ahri",
    },
    // Add more projects as needed
  ];

  useEffect(() => {
    // Run client-side code here if needed
  }, []);

  return (
    <>
      <html lang="en">
        <body className="bg-[#030014] overflow-y-scroll overflow-x-hidden">
          <Navbar />
          <main className="relative h-full w-full">
            <AhriElement />
            <AhriMain />

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
                  </div>
                ))}
              </div>
            </div>
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
};

export default Ahri;


