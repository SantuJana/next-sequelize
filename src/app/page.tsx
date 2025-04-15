'use client'
import { useEffect, useState } from "react";


export default function Home() {
  const [users, setUsers] = useState<any>([]);
  const getUsers = async () => {
    const response = await fetch('/api/user');
    const data = await response.json();
    setUsers(data);
  }

  useEffect(() => {
    getUsers();
  }, [])
  return (
    <>
      <h3>Users: </h3>
      {
        users.map((user: any) => [
          <p>name: {user.name} / {user.Role?.role}</p>
        ])
      }
    </>
  );
}
