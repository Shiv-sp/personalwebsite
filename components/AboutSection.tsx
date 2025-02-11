"use client";

import React from "react";
import { useTheme } from "next-themes";

const softwareSkills = [
  { skill: "Python" },
  { skill: "C" },
  { skill: "C++" },
  { skill: "Embedded C" },
  { skill: "Assembly" },
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "MATLAB" },
  { skill: "LaTeX" },
  { skill: "R" },
  { skill: "UML" },
  { skill: "Verilog (HDL)" },
  { skill: "Swift" },
];

const frameWorkLibrary = [
  { skill: "Next.js" },
  { skill: "React" },
  { skill: "TailwindCSS" },
  { skill: "Matplotlib" },
  { skill: "numPy" },
  { skill: "Pandas" },
  { skill: "yfinance" },
  { skill: "SwiftUI" },
];

const hardwareSkills = [
  { skill: "Arduino" },
  { skill: "Analog Discovery 2/3" },
  { skill: "Quanser Technologies" },
  { skill: "Microcontrollers/Microprocessors" },
  { skill: "FPGA" },
  { skill: "Oscilloscopes" },
  { skill: "Digital Multimeter" },
];

const tools = [
  { skill: "GitHub" },
  { skill: "Git" },
  { skill: "Figma" },
  { skill: "VS Code" },
  { skill: "XCode" },
  { skill: "Jupyter Notebook" },
  { skill: "Quartus" },
  { skill: "OrCAD" },
  { skill: "LTSpice" },
  { skill: "Keil uVision" },
  { skill: "Microsoft Office (Excel, Teams, Outlook, Word, PowerPoint)" },
  { skill: "AnsysGranta" },
  { skill: "AutoCAD" },
  { skill: "PrusaSlicer" },
];

const AboutSection = () => {
  const { theme } = useTheme(); // Get the current theme

  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me + Skills
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Shiv (he/him) and I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> Computer Engineering
              student based in Toronto, Ontario.
            </p>
            <br />
            <p>
              Currently, I'm in my 2nd year of pursuing a{" "}
              <span className="font-bold text-teal-500">
                Bachelors of Engineering (B.Eng.)
              </span>{" "}
              in{" "}
              <span className="font-bold text-blue-600">Computer Engineering</span>{" "}
              at{" "}
              <span className="font-bold text-red-900">McMaster University</span>{" "}
              in Hamilton, Ontario!
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From playing and watching{" "} 
              <span className="font-bold">{"sports (cricket, baseball, and basketball)"}</span>, 
              listening to{" "} 
              <span className="font-bold">{"music (shoutout to Drake and Taylor Swift!)"}</span>, 
              and exploring the outdoors!
              I am always seeking new experiences and love to keep myself engaged and learning new things.
            </p>
            <br />
            <p>
              In the tech world, my interests lie within{" "}
              <span className="font-bold text-yellow-500">full-stack development, software development, and embedded systems!</span>{" "}
              I also thrive on solving complex problems and enjoy the challenge of developing innovative solutions. Whether coding, designing digital systems, or exploring new tech trends, I approach each task with enthusiasm and a fresh perspective. 🙂
            </p>

            {/* Embed Spotify Playlist below the about me text */}
            <div className="mt-8">
              <p>
                If you know me, music is a big part of me, so I'll be updating this as often as I can 😌 
              </p>
              <p>
                <span className="font-bold text-green-600">For now, feel free to check out my Top Songs From 2024!</span>{" "}
              </p>
              <iframe
                style={{ borderRadius: "12px" }}
                src="https://open.spotify.com/embed/playlist/37i9dQZF1FoyQGyinuuvRu?utm_source=generator"
                width="100%"
                height="152"
                frameBorder="0"
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          {/* Skills Section */}
          <div className="md:w-1/2 flex flex-col space-y-8">
            {[
              { title: "Software", skills: softwareSkills, bgColor: "bg-sky-200" },
              { title: "Frameworks/Libraries", skills: frameWorkLibrary, bgColor: "bg-teal-200" },
              { title: "Hardware", skills: hardwareSkills, bgColor: "bg-blue-200" },
              { title: "Tools", skills: tools, bgColor: "bg-indigo-200" },
            ].map((section, index) => (
              <div
                key={index}
                className={`flex flex-col border-4 rounded-lg p-4 ${
                  theme === "dark" ? "border-white" : "border-black"
                }`}
              >
                <h1 className="text-center text-2xl font-bold mb-4">{section.title}</h1>
                <div className="flex flex-wrap">
                  {section.skills.map((item, idx) => (
                    <p
                      key={idx}
                      className={`${section.bgColor} px-4 py-2 m-2 text-gray-500 rounded font-semibold animate-bounce`}
                      style={{
                        animationDuration: "2s",
                        animationTimingFunction: "ease-in-out",
                        animationIterationCount: "infinite",
                      }}
                    >
                      {item.skill}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;


