  
import { Link } from "react-router";
import projects from "../../data/projects";

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            My Projects
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Things I've
            <span className="text-primary"> built.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            A selection of projects where I applied my skills to solve
            practical problems and build real-world web applications.
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {projects.map((project) => (
            <article
              key={project.title}
              className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-2 hover:border-primary/30"
            >

              {/* Image */}
              <div className="aspect-video overflow-hidden bg-gray-900">
                <img
                  src={project.image}
                  alt={`${project.title} project screenshot`}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-semibold">
                  {project.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-gray-400">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="mt-5 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full border border-white/10 bg-black px-3 py-1 text-xs text-gray-300"
                    >
                      {technology}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="mt-6 flex flex-wrap gap-3">

                  {/* Project Details */}
                  <Link
                    to={`/projects/${project.slug}`}
                    className="btn btn-primary btn-sm"
                  >
                    View Details
                  </Link>

                  {/* Live Demo */}
                  <a
                    href={project.liveLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-sm text-white"
                  >
                    Live Demo
                  </a>

                  {/* GitHub */}
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noreferrer"
                    className="btn btn-outline btn-sm text-white"
                  >
                    GitHub
                  </a>

                </div>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Projects;
 
