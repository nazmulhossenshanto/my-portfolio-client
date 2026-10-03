import { Link, useParams } from "react-router";
import projects from "../../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold">
            Project Not Found
          </h1>

          <p className="mt-4 text-gray-400">
            The project you're looking for doesn't exist.
          </p>

          <Link
            to="/"
            className="btn btn-primary mt-6"
          >
            Back to Home
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-black px-6 py-24 text-white">
      <div className="mx-auto max-w-5xl">

        {/* Back Button */}
        <Link
          to="/"
          className="mb-8 inline-block text-sm text-gray-400 transition hover:text-white"
        >
          ← Back to Projects
        </Link>

        {/* Heading */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Project Details
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-6xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
            {project.description}
          </p>
        </div>

        {/* Image */}
        <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
          <img
            src={project.image}
            alt={`${project.title} project screenshot`}
            className="w-full object-cover"
          />
        </div>

        {/* Overview */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold">
            Project Overview
          </h2>

          <p className="mt-5 leading-8 text-gray-400">
            {project.description}
          </p>
        </div>

        {/* Features */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold">
            Key Features
          </h2>

          <ul className="mt-5 space-y-3 text-gray-400">
            <li>• Responsive user interface</li>
            <li>• Modern component-based architecture</li>
            <li>• User-focused application experience</li>
            <li>• Real-world application workflow</li>
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mt-12">
          <h2 className="text-3xl font-bold">
            Tech Stack
          </h2>

          <div className="mt-5 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-gray-300"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="mt-12 flex flex-wrap gap-4">
          <a
            href={project.liveLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary"
          >
            Live Demo
          </a>

          <a
            href={project.githubLink}
            target="_blank"
            rel="noreferrer"
            className="btn btn-outline text-white"
          >
            GitHub
          </a>
        </div>

      </div>
    </section>
  );
};

export default ProjectDetails;