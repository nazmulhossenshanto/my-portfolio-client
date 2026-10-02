import { ArrowDown } from "lucide-react";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/4 top-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />

        <div className="absolute bottom-1/4 right-1/4 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto grid min-h-screen max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <p className="mb-4 text-lg font-medium text-primary">
            Hi, I'm
          </p>

          <h1 className="text-5xl font-bold leading-tight sm:text-6xl lg:text-7xl">
            Nazmul Hossen

            <span className="block bg-linear-to-r from-primary to-secondary bg-clip-text text-transparent">
              Shanto.
            </span>
          </h1>

          <h2 className="mt-6 text-2xl font-semibold text-gray-300 md:text-3xl">
            Frontend Developer
            <span className="text-primary"> & </span>
            Aspiring AI Engineer
          </h2>

          <p className="mt-6 max-w-2xl text-base leading-8 text-gray-400 md:text-lg">
            I build modern, responsive and user-focused web applications
            using React, JavaScript and modern web technologies. I'm also
            exploring AI engineering and intelligent application development.
          </p>

          {/* CTA */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>

            <a
              href="#contact"
              className="btn btn-outline text-white"
            >
              Contact Me
            </a>
          </div>

          {/* Social Links */}
          <div className="mt-8 flex items-center gap-4">
            <a
              href="https://github.com/nazmulhossenshanto"
              target="_blank"
              rel="noreferrer"
              className="btn btn-outline text-white"
            >
              GitHub
            </a>

            <a
              href="#"
              className="btn btn-outline text-white"
            >
              LinkedIn
            </a>
          </div>
        </motion.div>

        {/* Right Visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative flex h-72 w-72 items-center justify-center rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-md sm:h-96 sm:w-96">
            {/* Decorative Circle */}
            <div className="absolute -right-4 -top-4 h-20 w-20 rounded-full border border-primary/30" />

            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full border border-secondary/30" />

            {/* Main Visual */}
            <div className="text-center">
              <p className="text-7xl font-bold text-primary">
                {"</>"}
              </p>

              <p className="mt-5 text-sm font-medium tracking-[0.3em] text-gray-400">
                BUILD
              </p>

              <p className="mt-2 text-sm font-medium tracking-[0.3em] text-gray-400">
                LEARN
              </p>

              <p className="mt-2 text-sm font-medium tracking-[0.3em] text-gray-400">
                CREATE
              </p>
            </div>
          </div>
        </motion.div>
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