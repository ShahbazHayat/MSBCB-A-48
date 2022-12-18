import React from "react";
import { useEffect, useState } from "react"

const Table = () => {
    const [users, setUsers] = useState([
        {id:1, name: "Ram", email:"ram@gmail.com",age:23},
        {id:1, name: "Ram", email:"ram@gmail.com",age:23},
        {id:1, name: "Ram", email:"ram@gmail.com",age:23},
        {id:1, name: "Ram", email:"ram@gmail.com",age:23},
    ])
}

const handleDeleteRow = (id)=> {
    const newUsers = users.filter((x) => x.id !== id);
    setUsers(newUsers);
    console.log("users",users);
};

return(
    <div className="container">
        <table className="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
                {user.length <= 0 && (
                    <tr>
                        <td colSpan="5">
                        <span>no record found </span>
                        </td>
                    </tr>
                )}
                {user.length != 0 &&
                users.map((user) => (
                    <tr key={user.id}>
                        <td>{user.name}</td>
                        <td>{user.age}</td>
                        <td>{user.email}</td>
                        <td>
                            <button></button>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    </div>
)