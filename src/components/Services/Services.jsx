 
const services = [
  {
    number: "01",
    title: "Frontend Development",
    description:
      "I build modern, responsive and interactive web applications using React, JavaScript and modern frontend technologies.",
    technologies: ["React", "JavaScript", "Tailwind CSS"],
  },

  {
    number: "02",
    title: "Responsive Web Design",
    description:
      "I create user-friendly interfaces that work smoothly across mobile, tablet and desktop devices.",
    technologies: ["Responsive UI", "Tailwind CSS", "DaisyUI"],
  },

  {
    number: "03",
    title: "Full-Stack Web Development",
    description:
      "I can build complete web applications by connecting modern frontend interfaces with backend APIs and databases.",
    technologies: ["Node.js", "Express.js", "MongoDB"],
  },

  {
    number: "04",
    title: "API & Firebase Integration",
    description:
      "I integrate REST APIs, Firebase authentication and external services to make web applications functional and connected.",
    technologies: ["REST API", "Firebase", "Authentication"],
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 max-w-3xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            What I Do
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Services I can
            <span className="text-primary"> provide.</span>
          </h2>

          <p className="mt-5 max-w-2xl leading-8 text-gray-400">
            I help turn ideas into modern, responsive and functional
            web experiences using technologies I work with.
          </p>
        </div>

        {/* Services */}
        <div className="grid gap-5 md:grid-cols-2">

          {services.map((service) => (
            <article
              key={service.number}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/3 p-7 transition duration-300 hover:-translate-y-1 hover:border-primary/30 sm:p-8"
            >

              {/* Number */}
              <div className="flex items-start justify-between">
                <span className="text-sm font-semibold text-primary">
                  {service.number}
                </span>

                <span className="text-4xl font-bold text-white/5 transition duration-300 group-hover:text-primary/10">
                  {service.number}
                </span>
              </div>

              {/* Content */}
              <h3 className="mt-8 text-2xl font-semibold">
                {service.title}
              </h3>

              <p className="mt-4 max-w-xl leading-8 text-gray-400">
                {service.description}
              </p>

              {/* Technologies */}
              <div className="mt-6 flex flex-wrap gap-2">
                {service.technologies.map((technology) => (
                  <span
                    key={technology}
                    className="rounded-full border border-white/10 bg-black px-3 py-1.5 text-xs text-gray-400 transition hover:border-primary/40 hover:text-primary"
                  >
                    {technology}
                  </span>
                ))}
              </div>

              {/* Decorative line */}
              <div className="absolute bottom-0 left-0 h-px w-0 bg-primary transition-all duration-500 group-hover:w-full" />

            </article>
          ))}

        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-start justify-between gap-5 rounded-2xl border border-white/10 bg-white/3p-6 sm:flex-row sm:items-center sm:p-8">

          <div>
            <h3 className="text-xl font-semibold">
              Have a project in mind?
            </h3>

            <p className="mt-2 text-sm text-gray-500">
              Let's discuss how I can help bring your idea to life.
            </p>
          </div>

          <a
            href="#contact"
            className="btn btn-primary"
          >
            Start a Conversation
          </a>

        </div>

      </div>
    </section>
  );
};

export default Services;
 
