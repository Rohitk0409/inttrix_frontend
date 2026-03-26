import { Calendar } from "lucide-react";
import { useState } from "react";
import { projectsData } from "../../Data/projectsData";

const categories = [
  "all",
  "build",
  "grow",
  "brand",
  "ecommerce",
  // "software",
  // "marketing",
];

function Projects() {
  const [active, setActive] = useState("all");

  const filteredProjects =
    active === "all"
      ? projectsData
      : projectsData.filter((p) => p.category === active);

  return (
    <div className="min-h-screen bg-[#F8F9FC]">
      {/* HERO SECTION */}
      <div className="bg-[#1B2A4A] text-white py-16 md:py-20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(at_top_right,#F15A2B_0%,transparent_50%)] opacity-20" />
        <div className="max-w-4xl mx-auto px-4 relative">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Our Work & Projects
          </h1>
          <p className="text-gray-300 mt-4 text-lg max-w-md mx-auto">
            Real results from real clients. Turning ideas into impactful digital
            experiences.
          </p>
        </div>
      </div>

      {/* FILTER BUTTONS */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 
                ${
                  active === cat
                    ? "bg-[#F15A2B] text-white shadow-lg shadow-orange-500/30 scale-105"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:shadow"
                }`}
            >
              {cat === "all" ? "ALL PROJECTS" : cat.toUpperCase()}
            </button>
          ))}
        </div>
      </div>

      {/* PROJECTS GRID */}
      <div className="max-w-6xl mx-auto px-4 pb-16">
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-500 text-lg">
              No projects found in this category.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 flex flex-col h-full"
              >
                {/* Image Container with Hover Overlay */}
                <div className="relative overflow-hidden h-56">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-6 w-full">
                      {project.liveUrl && project.liveUrl !== "#" && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="mt-4 inline-flex items-center gap-2 bg-white text-[#1B2A4A] hover:bg-orange-50 font-medium text-sm px-5 py-2 rounded-full transition-colors"
                        >
                          View Live Project →
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-semibold text-xl text-[#1B2A4A] leading-tight">
                      {project.title}
                    </h3>
                    <span className="text-xs uppercase tracking-widest bg-orange-100 text-[#F15A2B] px-3 py-1 rounded font-medium whitespace-nowrap">
                      {project.type}
                    </span>
                  </div>

                  <p className="text-gray-600 mt-3 text-[15px] line-clamp-3 flex-1">
                    {project.description}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-100 flex items-center justify-between text-sm">
                    <div className="text-gray-500 text-xs flex items-center gap-2">
                      <Calendar size={15} />
                      {project.date}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Projects;
