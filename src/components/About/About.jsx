const About = () => {
  return (
    <section
      id="about"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            About Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Building for today,
            <span className="text-primary"> learning for tomorrow.</span>
          </h2>
        </div>

        {/* Content */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* Introduction */}
          <div>
            <h3 className="mb-5 text-2xl font-semibold">
              Who I Am
            </h3>

            <p className="leading-8 text-gray-400">
              I'm Nazmul Hossen Shanto, a frontend developer focused on
              building modern, responsive and user-friendly web applications.
              I enjoy turning ideas into clean and functional digital
              experiences using React, JavaScript and modern web technologies.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              Alongside frontend development, I'm gradually expanding my
              knowledge of backend development and exploring the world of
              artificial intelligence with the long-term goal of becoming an
              AI engineer.
            </p>
          </div>

          {/* Focus */}
          <div>
            <h3 className="mb-5 text-2xl font-semibold">
              What I'm Focused On
            </h3>

            <div className="space-y-5">

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Frontend Development
                </h4>

                <p className="text-sm leading-7 text-gray-400">
                  Building responsive and interactive interfaces with React,
                  JavaScript, Tailwind CSS and modern frontend tools.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  Full-Stack Development
                </h4>

                <p className="text-sm leading-7 text-gray-400">
                  Learning how frontend applications communicate with APIs,
                  servers and databases to build complete web applications.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <h4 className="mb-2 text-lg font-semibold text-primary">
                  AI Engineering
                </h4>

                <p className="text-sm leading-7 text-gray-400">
                  Exploring Python, AI and intelligent application development
                  as part of my long-term engineering journey.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;