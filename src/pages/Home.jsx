import { useEffect } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import axios from "axios";
import { profile } from "../data/profile";

function Home() {
  useEffect(() => {
    axios.post(
      "http://localhost:5000/api/visitor"
    );
  }, []);

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6"
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
        className="text-center max-w-4xl"
      >
        <h1 className="text-5xl md:text-7xl font-bold">
          {profile.name}
        </h1>

        <h2 className="text-2xl md:text-3xl mt-4 text-cyan-400">
          {profile.title}
        </h2>

        <p className="mt-6 text-gray-400 text-lg">
          {profile.subtitle}
        </p>

        <div className="flex flex-wrap justify-center gap-4 mt-10">
          <a
            href="/Malik_Mubashir Resume.pdf"
            download
            className="
              bg-cyan-500
              hover:bg-cyan-600
              px-6
              py-3
              rounded-lg
              font-semibold
              transition
            "
          >
            Download Resume
          </a>

          <a
            href="https://github.com/MalikTheProgrammer804"
            target="_blank"
            rel="noreferrer"
            className="
              border
              border-cyan-500
              px-6
              py-3
              rounded-lg
              flex
              items-center
              gap-2
              hover:bg-cyan-500/10
            "
          >
            <FaGithub />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/malik-mubashir-sohail-3399a0372/"
            target="_blank"
            rel="noreferrer"
            className="
              border
              border-cyan-500
              px-6
              py-3
              rounded-lg
              flex
              items-center
              gap-2
              hover:bg-cyan-500/10
            "
          >
            <FaLinkedin />
            LinkedIn
          </a>
        </div>
      </motion.div>
    </section>
  );
}

export default Home;
