import React from "react";
import useFetch from "../hooks/useFetch";

const About = () => {
    
  const url = "https://jsonplaceholder.typicode.com/posts";
  const { data, error, isLoading } = useFetch(url);

  return (
    <div>
      <h1>Posts</h1>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {data && data.map((i) => <li key={i.id}>{i.title}</li>)}
    </div>
  );
};

export default About;
