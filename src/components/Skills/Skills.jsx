const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Tailwind CSS",
      "DaisyUI",
    ],
  },
  {
    title: "Backend",
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST API",
    ],
  },
  {
    title: "Tools",
    skills: [
      "Git",
      "GitHub",
      "Firebase",
      "Vite",
    ],
  },
  {
    title: "Currently Exploring",
    skills: [
      "Python",
      "AI",
      "AI Engineering",
    ],
  },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mb-14 text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-primary">
            My Skills
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Technologies I
            <span className="text-primary"> work with.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-8 text-gray-400">
            A collection of technologies and tools I use to build modern
            web applications and the areas I'm currently exploring.
          </p>
        </div>

        {/* Skill Categories */}
        <div className="grid gap-6 md:grid-cols-2">

          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 transition duration-300 hover:-translate-y-1 hover:border-primary/30"
            >
              <h3 className="mb-5 text-2xl font-semibold">
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-white/10 bg-black px-4 py-2 text-sm text-gray-300 transition hover:border-primary/50 hover:text-primary"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Skills;