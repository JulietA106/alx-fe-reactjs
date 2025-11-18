import { useState } from "react";
import { searchAdvancedUsers } from "../services/githubService";

export default function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(false);
    setResults([]);

    try {
      const data = await searchAdvancedUsers(username, location, minRepos);
      if (data.items.length === 0) {
        setError(true);
      } else {
        setResults(data.items);
      }
    } catch (err) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row gap-2 mb-6"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />
        <input
          type="number"
          placeholder="Min repos"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded w-full md:w-1/3"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      {loading && <p className="text-gray-500">Loading...</p>}
      {error && <p className="text-red-500">Looks like we cant find the user</p>}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {results.map((user) => (
          <div
            key={user.id}
            className="border rounded p-4 flex items-center gap-4 shadow hover:shadow-md transition"
          >
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <p className="font-semibold">{user.login}</p>
              {user.location && <p className="text-sm">Location: {user.location}</p>}
              <a
                href={user.html_url}
                target="_blank"
                className="text-blue-500 hover:underline"
              >
                View Profile
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
