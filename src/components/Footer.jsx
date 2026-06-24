function Footer() {
  return (
    <footer
      className="
      bg-slate-900
      text-gray-300
      text-center
      py-8
      border-t
      border-slate-800
      "
    >
      <div className="container mx-auto px-4">
        <h3 className="text-lg font-semibold text-white">
          Malik Mubashir Sohail
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          Full Stack Developer | React | Node.js | Laravel
        </p>

        <div className="flex justify-center gap-6 mt-4">
          <a
            href="https://github.com/MalikTheProgrammer804"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition"
          >
            LinkedIn
          </a>

          <a
            href="mailto:malikmubashirsohail831@gmail.com"
            className="hover:text-white transition"
          >
            Email
          </a>
        </div>

        <p className="mt-6 text-xs text-gray-500">
          © {new Date().getFullYear()} Malik Mubashir Sohail. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;