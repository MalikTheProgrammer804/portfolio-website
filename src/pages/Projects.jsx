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
      console.log(err);
      setError("Failed to load projects");
      setLoading(false);
    });
}, []);
  );
}

export default Projects;
