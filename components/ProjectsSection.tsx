import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "Personal Website/Portfolio",
    description: "The one you're on right now!",
    tools: ["TypeScript", "Next.js", "JavaScript", "TailwindCSS", "Git", "Vercel"],
    type:["Personal"],
    image: "/Screenshot 2024-12-13 at 3.34.02 PM.png",
    github: "https://github.com/Shiv-sp/personalwebsite",
    link: "https://shivpatel.vercel.app/",
  },
  {
    name: "Snake Game",
    description:
      "A dynamic Snake Game with real-time collision detection, adaptive gameplay, and an interactive UI using OOP principles for modular, scalable design.",
    tools: ["C++", "C", "Git", "GitHub"],
    type:["Academic (Collaborative)"],
    image: "/Screenshot 2024-12-14 at 3.49.37 PM.png",
    github: "https://github.com/Shiv-sp/Snake-Game",
    link: "https://github.com/Shiv-sp/Snake-Game",
  },
  {
    name: "Porta-Basket",
    description:
      "Collaborated on the IMPACT Initiative to design a collapsible basket for wheelchair attachment, enhancing mobility and independence for a client with spina bifida.",
    tools: ["AutoCAD", "AnsysGranta", "PrusaSlicer", "Microsoft Office"],
    type:["Academic (Collaborative)"],
    image: "/collapsible model (1).png",
    github: "https://github.com/Shiv-sp/P4",
    link: "https://boom-safflower-220.notion.site/Project-4-Power-in-Community-Porta-Basket-b69e11e7bf3f49b8b9660545a4a4ce8f",
  },
  {
    name: "Lurnius",
    description:
      "Lurnius curates and ranks educational resources based on community votes, enhancing learning and productivity.",
    tools: ["Python", "React", "SQL", "TypeScript", "Next.js", "Node.js", "Express.js", "Figma"],
    type:["Hackathon (Collaborative)"],
    image: "/idea-brain-icon-on-transparent-background-free-png.webp",
    github: "https://github.com/ypatel2022/lurnius",
    link: "https://devpost.com/software/lurnius",
  },
  {
    name: "BattleShip",
    description:
      "A Battleship game with interactive UI and grid-based gameplay.",
    tools: ["Python", "GitHub"],
    type:["Academic"],
    image: "/Screenshot 2024-12-14 at 4.02.14 PM.png",
    github: "https://github.com/Shiv-sp/Battleship",
    link: "https://github.com/Shiv-sp/Battleship",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={1000}
                      className="rounded-xl shadow-xl hover:opacity-70"
                    />
                  </Link>
                </div>
                <div className="mt-8 md:w-1/2">
                  <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-4 mb-4">
                    {project.type.map((type, idx) => (
                      <span
                        key={idx}
                        className="bg-violet-500 text-white px-4 py-2 rounded-full font-semibold text-sm"
                      >
                        {type}
                      </span>
                    ))}
                  </div>

                  {/* Tools Section */}
                  <div className="flex flex-wrap gap-4 mb-4">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="bg-orange-500 text-white px-4 py-2 rounded-full font-semibold text-sm"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-row align-bottom space-x-4">
                    <Link href={project.github} target="_blank">
                      <BsGithub
                        size={30}
                        className="hover:scale-110 transition-all transform cursor-pointer hover:text-blue-500 hover:shadow-xl"
                      />
                    </Link>
                    <Link href={project.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:scale-110 transition-all transform cursor-pointer hover:text-red-500 hover:shadow-xl"
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </SlideUp>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;

