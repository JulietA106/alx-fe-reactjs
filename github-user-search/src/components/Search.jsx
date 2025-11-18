import { useState } from "react";
import { searchUsers } from "../services/githubService";

const Search = () => {
  const [query, setQuery] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setUsers([]);

    try {
      const data = await searchUsers(query, {
        location: location || undefined,
        minRepos: minRepos ? parseInt(minRepos) : undefined,
      });
      if (data.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setUsers(data);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Enter GitHub username or keyword"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 mr-2"
        />
        <input
          type="number"
          placeholder="Min Repos (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 mr-2"
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      <div className="mt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded">
            <img src={user.avatar_url} alt={user.login} className="w-20 h-20 rounded-full" />
            <h2 className="text-xl font-bold">{user.login}</h2>
            <a href={user.html_url} target="_blank" className="text-blue-600">
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
