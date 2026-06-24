

function Experience() {
  const experiences = [
    {
      title: "Freelancer",
      years: "2 Years",
      description:
        "Web Development, App Development, Data Entry"
    },

    {
      title: "Social Media Marketing",
      years: "2 Years",
      description:
        "Marketing campaigns and content management"
    },

    {
      title: "Real Estate Marketing",
      years: "2 Years",
      description:
        "Lead generation and client outreach"
    },

    {
      title: "Graphic Designer",
      years: "Canva",
      description:
        "Social media posts, banners, and branding"
    }
  ];

  return (
    <section
      id="experience"
      className="py-32 max-w-5xl mx-auto px-4"
    >
      <h2 className="text-4xl font-bold mb-10">
        Experience
      </h2>

      {experiences.map((exp, index) => (
        <div
          key={index}
          className="border-l-2 border-cyan-500 pl-6 mb-10"
        >
          <h3 className="text-2xl font-bold">
            {exp.title}
          </h3>

          <p className="text-cyan-400">
            {exp.years}
          </p>

          <p className="mt-2 text-slate-300">
            {exp.description}
          </p>
        </div>
      ))}
    </section>
  );
}

export default Experience;