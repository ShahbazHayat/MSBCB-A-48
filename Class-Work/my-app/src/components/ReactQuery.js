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
          <h2>Username</h2>
          {data.map((users, id) => {
            return <li key={id}>{users.username}</li>;
          })}
        </div>
        <div className="container w-auto">
          <h2>Name</h2>
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
          className="btn btn-dark mt-5"
          onClick={() => {
            setOpenForm(!openForm);
          }}
        >
          Add New User
        </button>
      </div>
      {openForm && (
        <div className="container text-center w-50">
          <form className="form mt-5">
            <div class="form-outline mb-4">
              <input
                class="form-control"
                placeholder="Username"
                name="username"
              />
            </div>
            <div class="form-outline mb-4">
              <input class="form-control" placeholder="Name" name="name" />
            </div>

            <div class="form-outline mb-4">
              <input class="form-control" placeholder="Age" name="age" />
            </div>
            <div class="form-outline mb-4">
              <input
                class="form-control"
                placeholder="Profession"
                name="profession"
              />
            </div>

            <button type="submit" class="btn btn-dark">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default ReactQuery;
