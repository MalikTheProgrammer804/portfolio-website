import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";

function Projects() {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("https://api.github.com/users/MalikTheProgrammer804/repos")
      .then((res) => {
        const sorted = res.data.sort(
          (a, b) => b.stargazers_count - a.stargazers_count
        );

        setRepos(sorted.slice(0, 6));
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);

        setRepos([
          {
            id: 1,
            name: "Demo Project",
            description: "Fallback project if GitHub API fails",
            html_url: "https://github.com",
          },
        ]);

        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <p className="text-white text-center py-20">
        Loading projects...
      </p>
    );
  }

  if (error) {
    return (
      <p className="text-red-500 text-center py-20">
        {error}
      </p>
    );
  }

  return (
    <section
      id="projects"
      className="py-32 max-w-6xl mx-auto px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-10 text-white">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {repos.map((repo) => (
            <div
              key={repo.id}
              className="bg-slate-800 p-6 rounded-xl hover:scale-105 transition"
            >
              <h3 className="font-bold text-xl text-white">
                {repo.name}
              </h3>

              <p className="text-slate-400 mt-3">
                {repo.description || "No description available"}
              </p>

              <a
                href={repo.html_url}
                target="_blank"
                rel="noreferrer"
                className="text-cyan-400 mt-4 inline-block"
              >
                View Project →
              </a>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

export default Projects;