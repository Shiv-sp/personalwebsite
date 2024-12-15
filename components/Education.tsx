import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightSquare } from "react-icons/bs";

// Education Data
const Education = [
  {
    institution: "McMaster University",
    degree: "Bachelor's of Engineering (B. Eng.) - Computer Engineering Co-Op ",
    awards:
      "Engineering Dean's Excellence Award ($7,500), McMaster University Award of Excellence ($3,000)",
    relevantCourses:
      "Design & Projects in Engineering, Principles of Programming, Logic Design, Innovative Technologies - AI, Circuit Analysis, Linear Algebra",
    image: "/IMG_0380.jpeg",
    link: "https://www.eng.mcmaster.ca/ece/",
  },
  {
    institution: "York Memorial CI",
    degree: "Ontario Secondary School Diploma (OSSD)",
    awards:
      "J.W. Ansley Scholarship ($600), Ontario Principals' Award for Student Leadership ($200), Distinction in: Mathematics of Data Management (MDM4U), University Chemistry (SCH4U), University English (ENG4U), Healthy Living/Personal Fitness Award (PAF4O), University Kinesiology (PSK4U), 2022-2023 TDSSAA Varsity Boys Cricket City Champions",
    relevantCourses: "Introduction to Computer Studies/Science",
    image: "/IMG_6197.jpg",
    link: "https://schoolweb.tdsb.on.ca/yorkmemorial",
  },
];

const EducationSection = () => {
  return (
    <section
      id="education"
      className="py-12 opacity-0 animate-fadeIn"
    >
      <h1 className="text-center font-bold text-4xl mb-10">
        Education
        <hr className="w-8 h-1 mx-auto my-4 bg-teal-500 border-0 rounded" />
      </h1>

      <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
        {Education.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-white to-gray-100 dark:from-gray-800 dark:to-gray-900 shadow-lg rounded-lg overflow-hidden transform transition duration-500 hover:-translate-y-3 hover:shadow-xl"
          >
            <div className="relative">
              <Image
                src={item.image}
                alt={item.institution}
                width={500}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center text-white text-xl font-bold opacity-0 hover:opacity-100 transition-opacity">
              </div>
            </div>
            <div className="text-black dark:text-gray-300 p-6 space-y-4">
              <h2 className="text-2xl font-bold">{item.institution}</h2>
              <p>
                <span className="font-semibold">Degree:</span> {item.degree}
              </p>
              <p className="text-neutral-700 dark:text-gray-400">
                <span className="font-semibold">Awards:</span> {item.awards}
              </p>
              <p className="text-neutral-700 dark:text-gray-400">
                <span className="font-semibold">Relevant Courses:</span>{" "}
                {item.relevantCourses}
              </p>
              <div className="mt-4">
                <Link
                  href={item.link}
                  target="_blank"
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-gray-300"
                >
                  <BsArrowUpRightSquare
                    size={30}
                    className="hover:scale-110 transition-all transform cursor-pointer hover:text-teal-500 hover:shadow-xl"
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


