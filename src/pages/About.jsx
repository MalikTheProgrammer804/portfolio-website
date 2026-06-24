import { profile } from "../data/profile";

function About() {
  return (
    <section
      id="about"
      className="py-32 max-w-5xl mx-auto"
    >
      <h2 className="text-4xl font-bold mb-8">
        About Me
      </h2>

      <p className="text-slate-300">
        {profile.about}
      </p>
    </section>
  );
}

export default About;