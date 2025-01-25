"use client";

import React from "react";
import blogData from "../data/blogs.json";

export default function Blog() {
  return (
    <section id="blogs" className="py-12 px-6 bg-gray-900 text-white">
      <div className="mx-[10%] space-y-8 mt-5">
        {/* Section Title */}
        <h3 className="text-2xl font-thin mb-6 uppercase tracking-wider relative inline-block">
          Latest Blog
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-0.5 bg-green-500"></span>
        </h3>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {blogData.blogs.map((blog, idx) => (
            <div
              key={idx}
              className="flex flex-col md:flex-row bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 duration-300 ease-in-out"
            >
              {/* Blog Image */}
              <div className="md:w-1/3 overflow-hidden rounded-l-xl">
                <img
                  src={blog.image || "https://via.placeholder.com/300x200"} // Add default dummy image if no image provided
                  alt={blog.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Blog Content */}
              <div className="p-6 flex-1">
                <h3 className="text-xl font-semibold text-green-400 mb-2">
                  {blog.title}
                </h3>
                <p className="text-sm text-gray-400 mb-1">{blog.date}</p>
                <p className="text-gray-500 mb-4">{blog.category}</p>

                {/* Blog Footer */}
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-gray-400 text-sm">
                     By Ajeet Singh
                  </span>
                  <a
                    href="#"
                    className="text-blue-400 hover:underline text-sm"
                  >
                    Read more
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
