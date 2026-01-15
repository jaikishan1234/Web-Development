import { MoveUpRight } from "lucide-react";

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "The Lighthouse",
      category: "2D Animation",
      description:
        "Adding a new dimension to projects through thoughtfully designed 2D animations",
      image:
        "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 2,
      title: "Snowscape Haven",
      category: "Visual Identity",
      description:
        "Crafting a visual identity that mirrors the serenity and allure of a winter sanctuary",
      image:
        "https://images.unsplash.com/photo-1482192596544-9eb780fc7f66?q=80&w=1600&auto=format&fit=crop",
    },
    {
      id: 3,
      title: "Navigating Possibilities",
      category: "Motion Graphics",
      description:
        "Motion graphics breathe life into the project, blending direction and creativity",
      image:
        "https://images.unsplash.com/photo-1767973419928-11ffdfe630a4?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMnx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      title: "Nocturnal Symphony",
      category: "3D Animation",
      description:
        "Through 3D artistry, we orchestrate an animated ode to the evening — a dance of shadows and dreams",
      image:
        "https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  return (
    <section className="py-24 px-5 md:px-10 lg:px-20">
      {/* HEADER */}
      <div className="flex flex-col lg:flex-row lg:justify-between gap-6 mb-16">
        <h2 className="text-4xl lg:text-5xl font-semibold">
          Recent <br className="hidden" /> Projects
        </h2>

        <p className="max-w-md text-gray-500 leading-relaxed">
          Step into the world of our most recent projects, a showcase of our
          unwavering commitment to progressive design
        </p>
      </div>

      {/* GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <article
            key={project.id}
            className={index % 2 !== 0 ? "md:mt-20" : ""}
          >
            {/* IMAGE (hover only here) */}
            <div className="relative aspect-3/2 rounded-2xl overflow-hidden group cursor-pointer">
              <img
                src={project.image}
                alt={project.title}
                loading="lazy"
                className="w-full h-full object-cover
                  transition-all duration-500 ease-out
                  group-hover:scale-105 group-hover:grayscale"
              />

              {/* GRADIENT */}
              <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />

              {/* CATEGORY */}
              <span
                className="absolute bottom-4 left-4 bg-white/90 backdrop-blur
                  px-5 py-2 rounded-full text-lg font-medium
                  transition-all duration-300 ease-out
                  translate-y-3 opacity-0
                  group-hover:translate-y-0 group-hover:opacity-100"
              >
                {project.category}
              </span>

              {/* ARROW */}
              <button
                aria-label={`View project ${project.title}`}
                className="absolute top-4 right-4 bg-white rounded-full p-3 shadow-md
                  transition-all duration-300 ease-out
                  group-hover:scale-125 group-hover:rotate-12"
              >
                <MoveUpRight size={28} />
              </button>
            </div>

            {/* TEXT (static) */}
            <div className="mt-5">
              <h3 className="text-xl md:text-2xl font-semibold text-purple-600">
                {project.title}
              </h3>
              <p className="text-gray-500 text-sm md:text-xl mt-1 leading-relaxed">
                {project.description}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Project;
