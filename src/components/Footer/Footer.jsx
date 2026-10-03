 
const Footer = () => {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-black text-white">
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 py-16">

        {/* Main CTA */}
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Have a project in mind?
          </p>

          <h2 className="mt-4 text-4xl font-bold sm:text-5xl lg:text-6xl">
            Let's build something
            <span className="block text-primary">
              meaningful.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            I'm always interested in new projects, creative ideas and
            opportunities to build something useful.
          </p>

          <a
            href="#contact"
            className="btn btn-primary mt-8 px-8"
          >
            Let's Talk
          </a>
        </div>

        {/* Divider */}
        <div className="my-14 h-px bg-white/10" />

        {/* Footer Bottom */}
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">

          {/* Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold">
              Shanto<span className="text-primary">.</span>
            </h3>

            <p className="mt-1 text-sm text-gray-500">
              Frontend Developer & Aspiring AI Engineer
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">

            <a
              href="https://github.com/nazmulhossenshanto"
              target="_blank"
              rel="noreferrer"
              className="flex h-11 items-center rounded-full border border-white/10 bg-white/5 px-5 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
            >
              GitHub
            </a>

            <a
              href="#"
              className="flex h-11 items-center rounded-full border border-white/10 bg-white/5 px-5 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
            >
              LinkedIn
            </a>

            <a
              href="#contact"
              className="flex h-11 items-center rounded-full border border-white/10 bg-white/5 px-5 text-sm text-gray-300 transition duration-300 hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
            >
              Contact
            </a>

          </div>
        </div>

        {/* Copyright */}
        <div className="mt-10 text-center text-sm text-gray-600">
          <p>
            © {new Date().getFullYear()} Nazmul Hossen Shanto. All rights reserved.
          </p>

          <p className="mt-2">
            Built with React, Tailwind CSS & curiosity.
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
 
