import React from "react";
import useFetch from "../hooks/useFetch";

const Users = () => {

  const url = "https://jsonplaceholder.typicode.com/users";
  const {data, isLoading, error} = useFetch(url);

  return (
    <div>
      <h1>Users</h1>
      {error && <h2>{error}</h2>}
      {isLoading && <h2>Loading...</h2>}
      {data && data.map((i) => <li key={i.id}>{i.name}</li>)}
    </div>
  );
};

export default Users;
