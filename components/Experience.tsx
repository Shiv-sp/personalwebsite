import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const Experience = [
  {
    name: "McMaster MicroBuild Engineering Society",
    description: "Software Development Officer (Web Development)",
    tools: "TBD",
    image: "/IMG_30552274246D-1.jpeg",
    link: "https://www.linkedin.com/company/microbuild-engineering-society-mcmaster/posts/?feedView=all",
  },
  {
    name: "McMaster Gujarati Students Association (MacGSA)",
    description: "VP Finance",
    tools: "Microsoft Office, Python",
    image: "/DSC03446.JPG",
    link: "https://msumcmaster.ca/initiative/mcmaster-gujarati-students-association/",
  },
  {
    name: "McMaster University - Housing & Conference Services",
    description: "Living Learning Community (LLC) Community Advisor (CA)",
    tools: "Microsoft Office, Canva",
    image: "/IMG_0019.jpg",
    link: "https://housing.mcmaster.ca/housing-conference-services/",
  },
  {
    name: "Jays Care Foundation - RBI SE",
    description: "Coach",
    tools: "Microsoft Office",
    image: "/57e614d9-c32d-475c-bd35-84d68ff95c72 2.JPG",
    link: "https://www.mlb.com/bluejays/community/jays-care",
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-12">
      <h1 className="text-center font-bold text-4xl mb-10">
        Experience (Technical & Non-Technical)
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {Experience.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="text-black mb-4 p-6">
              <h2 className="text-2xl font-bold mb-2">{item.name}</h2>
              <p className="text-neutral-700 mb-4">
                <span className="font-semibold">Role:</span> {item.description}
              </p>
              <p className="text-neutral-700 mb-4">
                <span className="font-semibold">Tools:</span> {item.tools}
              </p>
              <div className="flex space-x-4">
                <Link href={item.link} target="_blank" className="text-gray-500 hover:text-gray-700">
                  <BsArrowUpRightSquare
                        size={30}
                        className="hover:scale-110 transition-all transform cursor-pointer hover:text-violet-500 hover:shadow-xl"
                  />
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
