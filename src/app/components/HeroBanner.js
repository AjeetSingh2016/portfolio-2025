"use client";

import React from "react";
import { ReactTyped } from "react-typed";
import about from "../data/about.json";

export default function HeroBanner() {
  return (
    <section
      id="home"
      className="h-screen bg-gradient-to-r from-gray-900 to-black flex flex-col justify-center items-center text-center text-white relative"
    >
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: 'url("/path-to-your-image.jpg")' }}></div>
      <div className="relative z-10 w-[80%] space-y-8"> {/* Content Wrapper with Margin */}
        {/* Name */}
        <h1 className="text-5xl font-extrabold text-gray-100">
          Ajeet Singh
        </h1>

        {/* Typing Effect */}
        <h2 className="text-4xl font-bold text-gray-400">
          <ReactTyped
            strings={[
              "I am React Native Developer",
              "I am React JS Developer",
              "I am Full Stack Developer",
              "I am UI/UX Enthusiast"
            ]}
            typeSpeed={80}
            backSpeed={50}
            backDelay={1000}
            loop
            className="text-green-500"
          />
        </h2>

        {/* Title */}
        <h3 className="text-xl text-gray-400 mb-4">{about.title}</h3>

        {/* Summary */}
        <p className="max-w-lg mx-auto text-gray-300 mb-6">
          {about.summary}
        </p>

   

        {/* Call-to-Action Button */}
       
      </div>
           {/* Skills or Additional Content */}
         <div className="space-x-6 mb-10 mt-10">
          <span className="text-green-500 font-semibold">React Native</span>
          <span className="text-green-500 font-semibold">React JS</span>
          <span className="text-green-500 font-semibold">Front End</span>
          <span className="text-green-500 font-semibold">Mern Stack</span>
        </div>
        <a
          href="https://ncert-epub.s3.us-east-1.amazonaws.com/test/Ajeet's+Resume.pdf"
          download
          className="px-8 py-3 bg-gradient-to-r from-green-400 to-blue-500 text-white rounded-xl shadow-lg transform hover:scale-105 transition duration-300"
        >
          Download CV
        </a>
    </section>
    
  );
}
