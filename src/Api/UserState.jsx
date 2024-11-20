import { useState } from "react";

export const useUsersState = () => {
  const [users, setUsers] = useState([
    { id: 1, name: "John Doe", pass: "WACwac123@" },
    { id: 2, name: "Jane Smith", pass: "WACwac123@" },
  ]);

  const addUser = (newUser) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  return { users, addUser };
};
