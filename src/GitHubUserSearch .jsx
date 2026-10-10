import { useState } from "react";

const GitHubUserSearch = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const name = username.trim();
    if (name === "") return;

    setLoading(true);
    setError("");
    setUser(null);

    try {
      const response = await fetch(`https://api.github.com/users/${name}`);
      if (!response.ok) {
        throw new Error(
          response.status === 404 ? "User not found" : `HTTP error: ${response.status}`
        );
      }
      const data = await response.json();
      setUser(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>GitHub User Search</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter any GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {user && (
        <div>
          <img
            src={user.avatar_url}
            alt={user.login}
            width="120"
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.name || user.login}</h2>
          <p>@{user.login}</p>
          {user.bio && <p>{user.bio}</p>}
          {user.location && <p>Location: {user.location}</p>}
          <p>Public repos: {user.public_repos}</p>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <a href={user.html_url} target="_blank" rel="noreferrer">
            View GitHub profile
          </a>
        </div>
      )}
    </div>
  );
};

export default GitHubUserSearch;