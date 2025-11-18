import React, { useState } from "react";
import { fetchUserData, fetchAdvancedUsers } from "../services/githubService";

function Search() {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleBasicSearch = async (e) => {
    e.preventDefault();
    if (!username) return;
    setLoading(true);
    setError(false);

    try {
      const data = await fetchUserData(username);
      setUsers([data]); // wrap single user in array
    } catch {
      setError(true);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  const handleAdvancedSearch = async (e) => {
    e.preventDefault();
    if (!username && !location && !minRepos) return;
    setLoading(true);
    setError(false);

    try {
      const data = await fetchAdvancedUsers({ username, location, minRepos });
      setUsers(data.items || []);
    } catch {
      setError(true);
      setUsers([]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <form onSubmit={handleAdvancedSearch} className="flex flex-col gap-4 mb-4">
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="text"
          placeholder="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          placeholder="Minimum Repositories"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded"
        />
        <button
          type="submit"
          className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600"
        >
          Search
        </button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p>Looks like we cant find the user</p>}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {users.map((user) => (
          <div key={user.login} className="border p-4 rounded shadow">
            <img src={user.avatar_url} alt={user.login} className="w-24 h-24 rounded-full mx-auto" />
            <h3 className="text-center font-bold mt-2">{user.name || user.login}</h3>
            {user.location && <p className="text-center text-sm">{user.location}</p>}
            <p className="text-center text-sm">Repos: {user.public_repos || "N/A"}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-center block mt-2 text-blue-500 hover:underline"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
