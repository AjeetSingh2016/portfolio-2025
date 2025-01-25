const skills = [
    "React Native",
    "React.js",
    "C++",
    "Java",
    "JavaScript",
    "HTML+CSS",
    "ES6",
    "Express.js",
    "Tailwind CSS",
    "Material UI",
    "Node.js",
    "Gradle",
    "Git",
    "GitHub",
    "Redux",
    "Figma",
    "Postman",
    "Jest",
    "MongoDB",
    "Firebase",
    "Vercel",
    "Netlify",
  ];
  
  export default function Services() {
    return (
      <section id="services" className="py-8 bg-gray-900 text-white">
        <div className="mx-[10%]">
          {/* Section Heading */}
          <h2 className="text-2xl mt-6 font-thin uppercase tracking-wider mb-6 text-center relative">
            <span className="relative inline-block">
              My Skills Set
              <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1/2 h-0.5 bg-green-500"></span>
            </span>
          </h2>
  
          {/* Skills Badge Grid */}
          <div className="flex flex-col items-center space-y-4">
            {/* First Line */}
            <div className="flex flex-wrap justify-center gap-3">
              {skills.slice(0, 8).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm font-medium text-gray-100 bg-gray-800 rounded-full shadow-md hover:bg-green-500 transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
            {/* Second Line */}
            <div className="flex flex-wrap justify-center gap-3">
              {skills.slice(8, 16).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm font-medium text-gray-100 bg-gray-800 rounded-full shadow-md hover:bg-green-500 transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
            {/* Third Line */}
            <div className="flex flex-wrap justify-center gap-3">
              {skills.slice(16).map((skill, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm font-medium text-gray-100 bg-gray-800 rounded-full shadow-md hover:bg-green-500 transition duration-300"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
  
  
  
  
  
  