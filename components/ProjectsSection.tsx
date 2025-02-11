import React from "react";
import Image from "next/image";
import Link from "next/link";
import SlideUp from "./SlideUp";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const projects = [
  {
    name: "AC to DC Converter",
    description: "Designed and built a DC power supply capable of delivering 10 mA at 3V ± 0.1V from a 120V (rms) at 1 kHz AC source. Implemented a rectifier, filter, and regulator to ensure stable DC output, considering voltage ripple and component ratings. Simulated circuit performance in LTSpice and validated results using Analog Discovery 3, an oscilloscope, and an Agilent Function Generator.",
    tools: ["Analog Discovery 3", "Oscilloscope", "Agilent Function Generator", "Electrical Components", "LTSpice"],
    type: ["Academic"],
    "image": "/FinanceTrendSample copy.png",
    github: "https://github.com/Shiv-sp/AC-DC_Converter",
    link: "https://github.com/Shiv-sp/AC-DC_Converter"
  },
  {
    name: "UmpireMate",
    description: "Developed a cricket umpire score tracking app for real-time score updates, including runs, wickets, and overs. Implemented interactive buttons for scorekeeping, such as Run, Wicket, Ball, and Extra, using SwiftUI components. Built an intuitive UI in Xcode with features like New Inning and tracking multiple innings. The app supports dynamic updates and real-time score adjustments with visual feedback.",
    tools: ["Swift", "SwiftUI", "Xcode"],
    type: ["Personal"],
    image: "/FinanceTrendSample copy.png",
    github: "https://github.com/Shiv-sp/umpireMate",
    link: "https://github.com/Shiv-sp/umpireMate"
  },
  {
    name: "Finance Trend Plotter",
    description: "Fetches years of stock data given a range from the user, using yfinance and visualizes closing prices alongside 50-day and 200-day moving averages with a production-quality plot.",
    tools: ["Python", "Pandas", "yfinance", "Matplotlib", "Jupyter Notebook", "numPy"],
    type: ["Personal"],
    image: "/FinanceTrendSample copy.png",
    github: "https://github.com/Shiv-sp/StockAnalysisVisualizer",
    link: "https://github.com/Shiv-sp/StockAnalysisVisualizer"
  },

  {
    name: "Personal Website/Portfolio",
    description: "The one you're on right now!",
    tools: ["TypeScript", "Next.js", "JavaScript", "TailwindCSS", "Git", "Vercel"],
    type: ["Personal"],
    image: "/Screenshot 2024-12-13 at 3.34.02 PM.png",
    github: "https://github.com/Shiv-sp/personalwebsite",
    link: "https://shivpatel.vercel.app/",
  },
  {
    name: "Snake Game",
    description:
      "A dynamic Snake Game with real-time collision detection, adaptive gameplay, and an interactive UI using OOP principles for modular, scalable design.",
    tools: ["C++", "C", "Git", "GitHub"],
    type: ["Academic (Collaborative)"],
    image: "/Screenshot 2024-12-14 at 3.49.37 PM.png",
    github: "https://github.com/Shiv-sp/Snake-Game",
    link: "https://github.com/Shiv-sp/Snake-Game",
  },
  { 
    name: "Programmable and Sequential Logic Circuits",
    description: "Implemented combinational and sequential logic circuits, including JK flip-flops, shift registers, and synchronous counters, using Verilog and schematic capture. Designed and simulated a circular shift register and synchronous up-counter, verifying functionality through HDL simulations and hardware testing with FPGAs. Configured EEPROM for binary-to-BCD conversion and measured access times using oscilloscopes and logic analyzers.",
    tools: ["Quartus Prime Lite", "Questa FSE", "MAX10 FPGA", "Verilog", "Oscilloscope", "Logic Gates"],
    type: ["Academic"],
    image: "/Screenshot 2024-12-14 at 3.49.37 PM.png",
    github: "https://github.com/Shiv-sp/lab4-2di4",
    link: "https://github.com/Shiv-sp/lab4-2di4"
  },
  {
    name: "Porta-Basket",
    description:
      "Collaborated on the IMPACT Initiative to design a collapsible basket for wheelchair attachment, enhancing mobility and independence for a client with spina bifida.",
    tools: ["AutoCAD", "AnsysGranta", "PrusaSlicer", "Microsoft Office"],
    type: ["Academic (Collaborative)"],
    image: "/collapsible model (1).png",
    github: "https://github.com/Shiv-sp/P4",
    link: "https://boom-safflower-220.notion.site/Project-4-Power-in-Community-Porta-Basket-b69e11e7bf3f49b8b9660545a4a4ce8f",
  },
  {
    name: "Revenge of The Recycling System",
    description: "Collaborated in a team environment to design and implement a recycling simulation system using Python and Quanser Technologies, simulating automated sorting processes for environmental awareness. Integrated real-time control algorithms to manage conveyor belt movements and object detection, ensuring accurate sorting and system efficiency. Utilized Quanser's graphical interface for verification and testing, ensuring system accuracy and validating sorting operations.",
    tools: ["Python", "Quanser Technologies"],
    type: ["Academic", "Collaborative"],
    "image": "/FinanceTrendSample copy.png",
    github: "https://github.com/Shiv-sp/Revenge-of-The-Recycling-System",
    link: "https://github.com/Shiv-sp/Revenge-of-The-Recycling-System"
  }
  {
    name: "Lurnius",
    description:
      "Lurnius curates and ranks educational resources based on community votes, enhancing learning and productivity.",
    tools: ["Python", "React", "SQL", "TypeScript", "Next.js", "Node.js", "Express.js", "Figma"],
    type: ["Hackathon (Collaborative)"],
    image: "/Screenshot 2024-12-15 at 10.25.27 AM.png",
    github: "https://github.com/ypatel2022/lurnius",
    link: "https://devpost.com/software/lurnius",
  },
  {
    name: "BattleShip",
    description: "A Battleship game with interactive UI and grid-based gameplay.",
    tools: ["Python", "GitHub"],
    type: ["Academic"],
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
        <hr className="w-6 h-1 mx-auto my-4 bg-sky-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => (
          <div key={idx}>
            <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col animate-slideUpCubiBezier animation-delay-2 md:flex-row md:space-x-12">
                <div
                  className={`md:w-1/2 ${
                    project.name === "Lurnius"
                      ? "bg-transparent p-4 rounded-lg dark:bg-transparent"
                      : ""
                  }`}
                >
                  <Link href={project.link}>
                    <Image
                      src={project.image}
                      alt=""
                      width={1000}
                      height={600}
                      className={`rounded-xl shadow-xl hover:opacity-70 ${
                        project.name === "Lurnius" ? "h-auto" : ""
                      }`}
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




