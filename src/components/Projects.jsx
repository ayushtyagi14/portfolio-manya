import React, { useState } from "react";
import madrasImage from "../assets/madras.jpeg";
import danceImage from "../assets/dance.PNG";
import micImage from "../assets/mic.JPG";
import presentationVideo from "../assets/presentation.MP4";
import posterImage from "../assets/poster.JPG";
import brochureImage from "../assets/brochure.JPG";
import flyerImage from "../assets/flyer.JPG";
import infographicImage from "../assets/infographic.JPG";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const projects = [
    {
      id: 1,
      title: "Project 1",
      category: "logo",
      image: madrasImage,
    },
    {
      id: 2,
      title: "Project 2",
      category: "logo",
      image: danceImage,
    },
    {
      id: 3,
      title: "Project 3",
      category: "logo",
      image: micImage,
    },
    {
      id: 4,
      title: "Project 8",
      category: "presentation",
      video: presentationVideo,
    },
    {
      id: 5,
      title: "Project 5",
      category: "flyer",
      image: flyerImage,
    },
    {
      id: 6,
      title: "Project 6",
      category: "brochure",
      image: brochureImage,
    },
    {
      id: 7,
      title: "Project 4",
      category: "infographic",
      image: infographicImage,
    },
    {
      id: 8,
      title: "Project 7",
      category: "poster",
      image: posterImage,
    },
  ];

  const categories = [
    "all",
    "presentation",
    "poster",
    "infographic",
    "logo",
    "flyer",
    "brochure",
  ];

  const filterProjects = (category) => {
    setSelectedCategory(category);
  };

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section className="px-4 sm:py-24 sm:px-6 lg:px-8" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-[#89023E] sm:text-4xl">
            Portfolio
          </h2>
          <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-700 sm:mt-4">
            Here are some examples of my work:
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`${
                  selectedCategory === category
                    ? "bg-[#89023E] text-white"
                    : "bg-white text-gray-700 hover:bg-gray-200"
                } px-4 py-2 rounded-full transition-colors uppercase`}
                onClick={() => filterProjects(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProjects.map((project) => (
            <div key={project.id}>
              {project.image && (
                <img
                  src={project.image}
                  alt={project.title}
                  className="rounded-lg shadow-lg"
                />
              )}
              {project.video && (
                <video
                  controls
                  autoPlay
                  muted
                  loop
                  src={project.video}
                  className="rounded-lg shadow-lg"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
