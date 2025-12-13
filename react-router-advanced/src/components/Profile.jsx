import React from "react";
import { Outlet, Link } from "react-router-dom";

const Profile = () => (
  <div>
    <h1>Profile Page</h1>
    <nav>
      <Link to="details">Details</Link> | <Link to="settings">Settings</Link>
    </nav>
    <Outlet /> {/* Nested routes render here */}
  </div>
);

export default Profile;
