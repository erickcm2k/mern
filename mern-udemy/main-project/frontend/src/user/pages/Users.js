import React from "react";
import UsersList from "../components/UsersList";
const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Sam",
      image:
        "https://images.unsplash.com/photo-1607053075919-028173cb9910?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      places: 3,
    },
    {
      id: "u2",
      name: "Anya",
      image:
        "https://images.unsplash.com/photo-1607054137382-adc96dd5cbb2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80",
      places: 5,
    },
  ];

  return <UsersList items={USERS} />;
};
export default Users;
