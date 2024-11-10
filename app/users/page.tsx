import React from "react";
import UserTable from "./UserTable";
import Link from "next/link";

interface User {
  id: number;
  name: string;
  email: string;
}

interface Props {
  searchParams: {
    sortOrder?: string;
  };
}

const UsersPage = async ({ searchParams }: Props) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const users: User[] = await res.json(); // Specify users as User[]

  const sortOrder = searchParams.sortOrder || "name";

  const sortedUsers = users.sort((a, b) => {
    if (sortOrder === "email") {
      return a.email.localeCompare(b.email);
    }
    return a.name.localeCompare(b.name);
  });

  return (
    <>
      <h1>Users</h1>
      <Link href="/users/new" className="btn">
        New User
      </Link>
      <UserTable users={sortedUsers} />
    </>
  );
};

export default UsersPage;
