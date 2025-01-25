import about from "../data/about.json";

export default function AboutMe() {
  return (
    <section id="about-me" className="py-20 bg-gray-900 text-white">
      <div className="mx-auto max-w-7xl px-4">
        {/* Heading */}
        <h2 className="text-4xl font-bold uppercase tracking-wider mb-16 text-center relative">
          <span className="relative inline-block">
            About Me
            <span className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-1/2 h-1 bg-green-500"></span>
          </span>
        </h2>

        {/* Education & Skills Section */}
        <div className="md:flex md:justify-between md:gap-12">
          {/* Education */}
          <div className="md:w-1/2">
            <h3 className="text-2xl font-thin mb-10 uppercase tracking-wider relative inline-block">
              Education
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-green-500"></span>
            </h3>
            <div className="space-y-8">
              {about.education.map((edu, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 relative"
                >
                  <div className="absolute -top-4 left-6 bg-green-500 px-4 py-2 text-sm font-semibold text-white rounded-full shadow-md">
                    {edu.year}
                  </div>
                  <h4 className="text-2xl font-semibold mt-8">{edu.degree}</h4>
                  <p className="text-gray-400 mt-2">{edu.institute}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Skills */}
          <div className="md:w-1/2 mt-16 md:mt-0">
            <h3 className="text-2xl font-thin mb-10 uppercase tracking-wider relative inline-block">
              My Skills
              <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-green-500"></span>
            </h3>
            <p className="text-gray-400 mb-8 text-lg leading-relaxed">
              {about.summary}
            </p>
            <div className="space-y-8">
              {about.skills.map((skill, idx) => (
                <div key={idx}>
                  <div className="flex justify-between mb-2">
                    <span className="text-lg font-medium">{skill.name}</span>
                    <span className="text-lg font-medium text-gray-400">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-3">
                    <div
                      className="bg-green-500 h-3 rounded-full transition-all duration-500 ease-in-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-thin mb-12 uppercase tracking-wider relative inline-block">
            My Experience
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-green-500"></span>
          </h3>

          <div className="space-y-8">
            {about.experience.map((exp, idx) => (
              <div
                key={idx}
                className="bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2 flex flex-col md:flex-row items-start"
              >
                <div className="flex-grow">
                  <h4 className="text-2xl font-semibold ">{exp.title}</h4>
                  <p className="text-sm text-green-300 mt-2">
                    {exp.company} - {exp.type}
                  </p>
                  <p className="text-sm text-gray-400 mt-2">
                    {exp.duration}
                  </p>
                  <p className="mt-4 text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
                <div className="mt-6 md:mt-0 md:ml-8">
                  <span className="px-6 py-2 bg-green-500 text-sm font-semibold text-white rounded-full shadow-md">
                    {exp.employmentType}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}