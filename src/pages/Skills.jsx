import { skills } from "../data/skills";
import { motion } from "framer-motion";
function Skills() {
  return (
    <section
      id="skills"
      className="py-32 max-w-6xl mx-auto px-4"
    >
         
<motion.div
 initial={{ opacity: 0, y: 50 }}
 whileInView={{
   opacity: 1,
   y: 0
 }}
 transition={{
   duration: 0.6
 }}
>
      <h2 className="text-4xl font-bold mb-12">
        Skills
      </h2>

      <div className="space-y-10">

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Web Development
          </h3>

          <div className="grid md:grid-cols-4 gap-4">
            {skills.webDevelopment.map((skill) => (
              <div
                key={skill}
                className="bg-slate-800 p-4 rounded-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            App Development
          </h3>

          <div className="grid md:grid-cols-4 gap-4">
            {skills.appDevelopment.map((skill) => (
              <div
                key={skill}
                className="bg-slate-800 p-4 rounded-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            AI Engineering
          </h3>

          <div className="grid md:grid-cols-4 gap-4">
            {skills.aiEngineering.map((skill) => (
              <div
                key={skill}
                className="bg-slate-800 p-4 rounded-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">
            Other Skills
          </h3>

          <div className="grid md:grid-cols-4 gap-4">
            {skills.otherSkills.map((skill) => (
              <div
                key={skill}
                className="bg-slate-800 p-4 rounded-lg"
              >
                {skill}
              </div>
            ))}
          </div>
        </div>

      </div>
      </motion.div>
    </section>
  );
}

export default Skills;