import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Post from "./Post";

const Posts = () => {
  const url = "https://jsonplaceholder.typicode.com/posts";
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fetchData();
  }, []);

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <>
      {isLoading ? (
        <h2>Loading...</h2>
      ) : (
        posts.map((post) => (
          <Post isLoading={isLoading} key={post.id} {...post} />
        ))
      )}
    </>
  );
};

export default Posts;
