import React from "react";
import { Link } from "react-router-dom";

const Home = () => (
  <div>
    <h1>Home Page</h1>
    <nav>
      <Link to="/profile">Profile</Link> | <Link to="/blog/123">Blog Post 123</Link>
    </nav>
  </div>
);

export default Home;
