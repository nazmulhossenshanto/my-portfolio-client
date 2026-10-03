const Contacts = () => {
  return (
    <section
      id="contact"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            Contact Me
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Let's work
            <span className="text-primary"> together.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            Have a project idea or want to work together?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid gap-12 md:grid-cols-2">

          {/* Left Side */}
          <div>
            <h3 className="text-2xl font-semibold">
              Get in touch
            </h3>

            <p className="mt-5 max-w-lg leading-8 text-gray-400">
              I'm currently open to frontend development opportunities,
              freelance projects and collaboration. If you have an idea
              you'd like to discuss, send me a message.
            </p>

            <div className="mt-8 space-y-5">

              <div>
                <p className="text-sm text-gray-500">
                  Email
                </p>

                <p className="mt-1 text-gray-200">
                  mdnazmulhossenshanto01@gmail.com
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Location
                </p>

                <p className="mt-1 text-gray-200">
                  Bangladesh
                </p>
              </div>

              <div>
                <p className="text-sm text-gray-500">
                  Availability
                </p>

                <p className="mt-1 text-gray-200">
                  Open to opportunities
                </p>
              </div>

            </div>
          </div>

          {/* Right Side */}
          <form className="space-y-5">

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Your Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="input w-full border-white/10 bg-white/5 text-white placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Your Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="input w-full border-white/10 bg-white/5 text-white placeholder:text-gray-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-sm text-gray-300">
                Message
              </label>

              <textarea
                rows="6"
                placeholder="Write your message..."
                className="textarea w-full border-white/10 bg-white/5 text-white placeholder:text-gray-500"
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Send Message
            </button>

          </form>

        </div>
      </div>
    </section>
  );
};

export default Contacts;