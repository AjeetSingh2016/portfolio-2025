"use client";

import portfolio from "../data/portfolio.json";
import { useState } from "react";
// import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";



// cn function definition
function cn(...args) {
  return args.filter(Boolean).join(" ");
}

// Manual Card Components
const Card = ({ children, className }) => (
  <div className={`flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full ${className}`}>
    {children}
  </div>
);

const CardHeader = ({ children, className }) => (
  <div className={`px-2 ${className}`}>
    {children}
  </div>
);

const CardTitle = ({ children, className }) => (
  <h3 className={`mt-1 text-base ${className}`}>{children}</h3>
);

const CardContent = ({ children, className }) => (
  <div className={`mt-auto flex flex-col px-2 ${className}`}>
    {children}
  </div>
);

const CardFooter = ({ children, className }) => (
  <div className={`px-2 pb-2 ${className}`}>
    {children}
  </div>
);

export default function ProjectCard() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = portfolio.projects.filter(
    (project) => filter === "All" || project.stack === filter
  );

  return (
    <section id="portfolio" className="py-12 px-4 bg-gray-900 text-white">
      <div className="mx-[10%] space-y-8 mt-5">
        {/* Added horizontal margin */}
        <h3 className="text-2xl font-thin mb-6 uppercase tracking-wider relative inline-block">
          My Portfolio
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-green-500"></span>
        </h3>
        <div className="flex space-x-4 mb-6">
          {["All", "React", "React Native"].map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`px-4 py-2 ${
                filter === tech
                  ? "bg-gradient-to-r from-green-400 to-blue-500 text-white"
                  : "bg-gray-600"
              } rounded`}
            >
              {tech}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, idx) => (
            <Card
              key={idx}
              className="flex flex-col overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out h-full"
            >
              <Link href={project.link || "#"} className={cn("block cursor-pointer")}>
                <Image
                  src={project.image || "/default-image.jpg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="h-40 w-full overflow-hidden object-cover object-top"
                />
              </Link>
              <CardHeader className="px-2">
                <div className="space-y-1">
                  <CardTitle className="mt-1 text-base">{project.title}</CardTitle>
                  <time className="font-sans text-xs">{project.dates}</time>
                  <div className="hidden font-sans text-xs underline print:visible">
                    {project.link?.replace("https://", "").replace("www.", "").replace("/", "")}
                  </div>
                  <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert">
                    {project.description}
                  </Markdown>
                </div>
              </CardHeader>
              <CardContent className="mt-auto flex flex-col px-2">
                {project.tags && project.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {project.tags?.map((tag, tagIdx) => (
                      <Badge className="px-1 py-0 text-[10px]" variant="secondary" key={tagIdx}>
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardContent>
              <CardFooter className="px-2 pb-2">
                {project.links && project.links.length > 0 && (
                  <div className="flex flex-row flex-wrap items-start gap-1">
                    {project.links?.map((link, linkIdx) => (
                      <Link href={link?.href} key={linkIdx} target="_blank">
                        <Badge className="flex gap-2 px-2 py-1 text-[10px]">
                          {link.icon}
                          {link.type}
                        </Badge>
                      </Link>
                    ))}
                  </div>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
