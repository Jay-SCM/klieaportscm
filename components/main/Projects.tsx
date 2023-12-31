// import React from "react";
// import ProjectCard from "../sub/ProjectCard";

// const Projects = () => {
//   return (
//     <div className="flex flex-col items-center justify-center py-20" id="projects">
//       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//         Projects
//       </h1>
//       <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
//         <ProjectCard
//           src="/ahri.jpg"
//           title="Weather APP"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           link="https://github.com/Jay-SCM/klieapp"
//         />
//         <ProjectCard
//           src="/akali.jpg"
//           title="Interactive Website Cards"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           link="https://github.com/Jay-SCM/klieapp"
//         />
//         <ProjectCard
//           src="/sylv2.jpg"
//           title="Chat App"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           link="https://github.com/Jay-SCM/klieapp"
//         />
//                 <ProjectCard
//           src="/sylv2.jpg"
//           title="Chat App"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           link="https://github.com/Jay-SCM/klieapp"
//         />
//                 <ProjectCard
//           src="/sylv2.jpg"
//           title="Chat App"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           link="https://github.com/Jay-SCM/klieapp"
//         />
//                 <ProjectCard
//           src="/sylv2.jpg"
//           title="Chat App"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           link="https://github.com/Jay-SCM/klieapp"
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;


// import React from "react";
// import ProjectCard from "../sub/ProjectCard";

// const Projects = () => {
//   return (
//     <div className="flex flex-col items-center justify-center py-20" id="projects">
//       <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
//         Projects
//       </h1>
//       <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10">
//         <ProjectCard
//           src="/ahri.jpg"
//           title="Weather APP"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           link="https://github.com/Jay-SCM/klieapp"
//         />
//         <ProjectCard
//           src="/akali.jpg"
//           title="Interactive Website Cards"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           link="https://github.com/Jay-SCM/klieapp"
//         />
//         <ProjectCard
//           src="/sylv3.jpg"
//           title="Chat App"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           link="https://github.com/Jay-SCM/klieapp"
//         />
//         <ProjectCard
//           src="/sylv3.jpg"
//           title="Chat App"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           link="https://github.com/Jay-SCM/klieapp"
//         />
//         <ProjectCard
//           src="/sylv3.jpg"
//           title="Chat App"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           link="https://github.com/Jay-SCM/klieapp"
//         />
//         <ProjectCard
//           src="/sylv3.jpg"
//           title="Chat App"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           link="https://github.com/Jay-SCM/klieapp"
//         />
//         <ProjectCard
//           src="/sylv3.jpg"
//           title="Chat App"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           link="https://github.com/Jay-SCM/klieapp"
//         />
//                 <ProjectCard
//           src="/sylv3.jpg"
//           title="Chat App"
//           description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
//           link="https://github.com/Jay-SCM/klieapp"
//         />
//       </div>
//     </div>
//   );
// };

// export default Projects;

//Project.tsx
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import Link from "next/link";

const Projects = () => {
  const projects = [
    {
      src: "/ahri.jpg",
      title: "Weather APP",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/Ahri"
    },
    {
      src: "/akali.jpg",
      title: "Interactive Website Cards",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/Pages/Ahri.tsx"
    },
    {
      src: "/ahri.jpg",
      title: "Chat App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/Pages/Ahri.tsx"
    },
    {
      src: "/akali.jpg",
      title: "Chat App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/Pages/Ahri.tsx"
    },
    {
      src: "/ahri.jpg",
      title: "Chat App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/Pages/Ahri.tsx"
    },
    {
      src: "/akali.jpg",
      title: "Chat App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/Pages/Ahri.tsx"
    },
    {
      src: "/akali.jpg",
      title: "Chat App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/Pages/Ahri.tsx"
    },
    {
      src: "/akali.jpg",
      title: "Chat App",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      link: "/Pages/Ahri.tsx"
    },
    // Add more projects as needed
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
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
