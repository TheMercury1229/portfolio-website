const aboutItems = [
  {
    label: "Projects built",
    number: 20,
  },
  {
    label: "Technologies used",
    number: 25,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-zinc-800/50 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-zinc-300 mb-4 md:mb-8 md:text-lg md:max-w-[60ch]">
            Hi! I'm <strong>Hardik</strong>, a pre-final year student pursuing{" "}
            <strong>Artificial Intelligence & Data Science</strong> at{" "}
            <strong>Pune Institute of Computer Technology, Pune</strong>. I have
            a solid grasp of core computer science concepts and love building
            responsive <strong>MERN stack</strong> applications with thoughtful
            design and practical functionality. I'm also the{" "}
            <strong>Technical Head</strong> at both <strong>PICT EDC</strong>{" "}
            and <strong>PICT MUN</strong>, where I lead development of internal
            tools, event systems, and real-time platforms used by 100+
            participants. I’m currently exploring <strong>DevOps</strong> and AI
            workflows, and enjoy creating scalable, real-world solutions that
            deliver impact.
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, index) => (
              <div key={index}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">
                    {number}
                  </span>
                  <span className="text-sky-400 font-semibold md:text-3xl">
                    +
                  </span>
                </div>
                <p className="text-sm text-zinc-400">{label}</p>
              </div>
            ))}

            <img
              src="/logo.svg"
              alt="logo"
              width={30}
              height={30}
              className="ml-auto md:w-[40px] md:h-[40px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
