 
import { Link, useParams } from "react-router";
import projects from "../../data/projects";

const ProjectDetails = () => {
  const { slug } = useParams();

  const project = projects.find(
    (item) => item.slug === slug
  );

  // Project not found
  if (!project) {
    return (
      <section className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            404
          </p>

          <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
            Project Not Found
          </h1>

          <p className="mx-auto mt-5 max-w-md leading-7 text-gray-400">
            The project you're looking for doesn't exist or may have
            been removed.
          </p>

          <Link
            to="/"
            className="btn btn-primary mt-8"
          >
            Back to Projects
          </Link>
        </div>
      </section>
    );
  }

  return (
    <main className="bg-black text-white">

      {/* ========================================
          HERO
      ======================================== */}
      <section className="px-6 pb-20 pt-32">
        <div className="mx-auto max-w-7xl">

          {/* Back Link */}
          <Link
            to="/#projects"
            className="inline-flex items-center text-sm text-gray-500 transition hover:text-primary"
          >
            ← Back to Projects
          </Link>

          {/* Project Heading */}
          <div className="mt-10 max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Project Case Study
            </p>

            <h1 className="mt-5 text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
              {project.title}
              <span className="text-primary">.</span>
            </h1>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400">
              {project.description}
            </p>
          </div>

        </div>
      </section>


      {/* ========================================
          PROJECT IMAGE
      ======================================== */}
      <section className="px-6">
        <div className="mx-auto max-w-7xl">

          <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-2xl">
            <img
              src={project.image}
              alt={`${project.title} project screenshot`}
              className="w-full object-cover"
            />
          </div>

        </div>
      </section>


      {/* ========================================
          OVERVIEW
      ======================================== */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              01
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Project Overview
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-lg leading-9 text-gray-400">
              {project.overview}
            </p>
          </div>

        </div>
      </section>


      {/* ========================================
          FEATURES
      ======================================== */}
      <section className="border-y border-white/10 bg-white/2 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              02
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              Key Features
            </h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {project.features.map((feature, index) => (
              <div
                key={feature}
                className="group rounded-2xl border border-white/10 bg-black p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30"
              >
                <div className="flex gap-5">

                  <span className="text-sm font-semibold text-primary">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <p className="leading-7 text-gray-300">
                    {feature}
                  </p>

                </div>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================
          MY ROLE
      ======================================== */}
      <section className="px-6 py-24">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              03
            </p>

            <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
              My Role
            </h2>
          </div>

          <div>
            <p className="max-w-3xl text-lg leading-9 text-gray-400">
              {project.role}
            </p>
          </div>

        </div>
      </section>


      {/* ========================================
          CHALLENGES & SOLUTIONS
      ======================================== */}
      <section className="border-y border-white/10 bg-white/2 px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <div className="grid gap-16 md:grid-cols-2">

            {/* Challenges */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                04
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Challenges
              </h2>

              <div className="mt-8 space-y-4">
                {project.challenges.map((challenge) => (
                  <div
                    key={challenge}
                    className="rounded-2xl border border-white/10 bg-black p-5"
                  >
                    <p className="leading-7 text-gray-400">
                      {challenge}
                    </p>
                  </div>
                ))}
              </div>
            </div>


            {/* Solutions */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
                05
              </p>

              <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
                Solutions
              </h2>

              <div className="mt-8 space-y-4">
                {project.solutions.map((solution) => (
                  <div
                    key={solution}
                    className="rounded-2xl border border-white/10 bg-black p-5"
                  >
                    <p className="leading-7 text-gray-400">
                      {solution}
                    </p>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* ========================================
          TECH STACK
      ======================================== */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-7xl">

          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            06
          </p>

          <h2 className="mt-3 text-3xl font-bold sm:text-4xl">
            Technologies Used
          </h2>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-white/10 bg-white/5 px-5 py-2.5 text-sm text-gray-300 transition hover:border-primary/40 hover:text-primary"
              >
                {technology}
              </span>
            ))}
          </div>

        </div>
      </section>


      {/* ========================================
          CTA
      ======================================== */}
      <section className="px-6 pb-28">
        <div className="mx-auto max-w-7xl">

          <div className="rounded-3xl border border-white/10 bg-white/2 px-6 py-12 text-center sm:px-12">

            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
              Explore the project
            </p>

            <h2 className="mt-4 text-3xl font-bold sm:text-4xl">
              Want to see it in action?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-400">
              Check out the live project or explore the source code
              to see how it was built.
            </p>

            <div className="mt-8 flex flex-wrap justify-center gap-4">

              <a
                href={project.liveLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-primary px-7"
              >
                Live Demo
              </a>

              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline px-7 text-white"
              >
                GitHub
              </a>

            </div>

          </div>

        </div>
      </section>

    </main>
  );
};

export default ProjectDetails;
 
