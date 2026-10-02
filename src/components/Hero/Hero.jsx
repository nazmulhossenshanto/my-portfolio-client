import {   ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-black text-white">
      <div className="mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        {/* Left Content */}
        <div>
          <p className="mb-4 text-lg font-medium text-primary">Hi, I'm</p>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Nazmul Hossen
            <span className="block">
              Shanto<span className="text-primary">.</span>
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-gray-300 md:text-3xl">
            Frontend Developer
            <span className="text-primary"> & </span>
            Aspiring AI Engineer
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            I build modern, responsive and user-focused web applications using
            React, JavaScript and modern web technologies. I'm also exploring AI
            engineering and intelligent application development.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a href="#contact" className="btn btn-outline text-white">
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/nazmulhossenshanto"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline"
            >
              GitHub
            </a>

            <a href="#" className="btn btn-outline">
              LinkedIn
            </a>
          </div>
        </div>

        {/* Right Visual */}
        <div className="flex justify-center">
          <div className="flex h-72 w-72 items-center justify-center rounded-full border border-primary/30 bg-primary/5 shadow-2xl shadow-primary/10 sm:h-96 sm:w-96">
            <div className="text-center">
              <p className="text-6xl font-bold text-primary">{"</>"}</p>

              <p className="mt-4 text-sm tracking-widest text-gray-400">
                BUILD • LEARN • CREATE
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block">
        <a
          href="#about"
          aria-label="Scroll to About section"
          className="text-gray-500 transition hover:text-white"
        >
          <ArrowDown className="animate-bounce" />
        </a>
      </div>
    </section>
  );
};

export default Hero;
