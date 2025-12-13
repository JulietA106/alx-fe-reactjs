import React from "react";
import { useParams } from "react-router-dom";

const BlogPost = () => {
  const { postId } = useParams(); // dynamic route param
  return <h1>Blog Post ID: {postId}</h1>;
};

export default BlogPost;
