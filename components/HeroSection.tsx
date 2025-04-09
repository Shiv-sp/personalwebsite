"use client"

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  const textVariants = [
    "Shiv!",
    "a leader!",
    "an innovator!",
    "an athlete!",
    "a music enjoyer!",
  ];

  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (!isDeleting && charIndex < textVariants[index].length) {
        setCurrentText((prev) => prev + textVariants[index][charIndex]);
        setCharIndex((prev) => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setCurrentText((prev) => prev.slice(0, -1));
        setCharIndex((prev) => prev - 1);
      } else if (!isDeleting && charIndex === textVariants[index].length) {
        setIsDeleting(true);
        setTimeout(() => {}, 4000);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % textVariants.length);
      }
    }, isDeleting ? 150 : 150);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, index]);

  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2">
          <Image
            src="/sp-pfp-alt.jpg"
            alt="Profile Picture"
            width={325}
            height={325}
            className="rounded-full shadow-2xl"
          />
        </div>

        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            Hi, I&#39;m{" "}
            <span className="text-cyan-600">{currentText}</span>
          </h1>
          <p className="text-lg mt-4 mb-2 md:text-2xl">
            📍Incoming @ <span className="font-semibold text-emerald-600">Candor Industries!</span>.
          </p>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">Computer Engineer</span>
            {" "}based in Toronto, Ontario. I&#39;m currently seeking internships for{" "}
            <span className="font-semibold text-blue-600">Fall & Winter 2025</span>
            {" "}in{" "}
            <span className="font-semibold text-red-600">Project Management</span>,{" "}
            <span className="font-semibold text-yellow-600">Software Engineering</span>
            {" "}and/or{" "}
            <span className="font-semibold text-green-600">Hardware Engineering</span>
            {" "}related roles!
          </p>
          <a
            href="/ShivPatel_Resume_March25.pdf"
            className="text-neutral-100 font-semibold px-6 py-3 bg-green-500 rounded shadow hover:bg-teal-700"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Resume!
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;

