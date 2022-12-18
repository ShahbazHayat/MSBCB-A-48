import React, { useState } from "react";
import { useQuery } from "react-query";

const ReactQuery = () => {
  const [openForm, setOpenForm] = useState(false);
  const getUser = async () => {
    const data = await fetch("http://localhost:3004/users");
    return data.json();
  };
  const { data, error, isError, isLoading } = useQuery("users", getUser);
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <div className="container mt-4">
      <div className="d-flex justify-content-center">
        <div className="container w-auto">
          <h2>Usernames</h2>
          {data.map((users, id) => {
            return <li key={id}>{users.name}</li>;
          })}
        </div>
        <div className="container w-auto">
          <h2>Age</h2>
          {data.map((users, id) => {
            return <li key={id}>{users.age}</li>;
          })}
</div>
        <div className="container w-auto">
          <h2>Profession</h2>
          {data.map((users, id) => {
            return <li key={id}>{users.profession}</li>;
          })}
        </div>
      </div>
      <div className="d-flex justify-content-center">
        <button
          className="btn btn-primary mt-5"
          onClick={() => {
            setOpenForm(!openForm);
          }}
        >
          Add New User
        </button>
      </div>
      {openForm && (
        <form className="form form-control mt-5 ">
          <input type="text" placeholder="username" name="username" />
          <input type="text" placeholder="age" name="age" />
          <input type="text" placeholder="profession" name="profession" />
          <input type="text" placeholder="id" name="id" />
          <button className="btn btn-primary">submit</button>
        </form>
      )}
    </div>
  );
};

export default ReactQuery;