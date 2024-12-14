import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

const Education = [
  {
    institution: "McMaster University",
    degree: "Bachelor of Engineering (Computer Engineering)",
    currentCourses: "Stay tuned!",
    relevantCourses: "Design & Projects in Engineering, Principles of Programming, Logic Design, Innovative Technologies - AI, Circuit Analysis, Linear Algebra",
    image: "/IMG_0380.jpeg",
    link: "https://www.eng.mcmaster.ca/programs/computer-engineering",
  },
];

const EducationSection = () => {
  return (
    <section id="education" className="py-12">
      <h1 className="text-center font-bold text-4xl mb-10">
        Education
        <hr className="w-8 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {Education.map((item, idx) => (
          <div
            key={idx}
            className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <Image
              src={item.image}
              alt={item.institution}
              width={500}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="text-black p-6">
              <h2 className="text-2xl font-bold mb-2">{item.institution}</h2>
              <p className="text-neutral-700 mb-4">
                <span className="font-semibold">Degree:</span> {item.degree}
              </p>
              <p className="text-neutral-700 mb-4">
                <span className="font-semibold">Current Courses:</span> {item.currentCourses}
              </p>
              <p className="text-neutral-700 mb-4">
                <span className="font-semibold">Relevant Courses:</span> {item.relevantCourses}
              </p>
              <div className="flex space-x-4">
              <Link href={item.link} target="_blank" className="text-gray-500 hover:text-gray-700">
                  <BsArrowUpRightSquare
                        size={30}
                        className="hover:scale-110 transition-all transform cursor-pointer hover:text-sky-500 hover:shadow-xl"
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

export default EducationSection;
