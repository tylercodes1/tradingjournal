import { useLoaderData } from "react-router";
import Table from "../components/Table/Table";

export function meta({}) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

// Server-side loader
export async function loader() {
  // Example: fetch data from DB or API
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  return users; // only runs server-side
}

export default function Home() {
  const users = useLoaderData();
  console.log(users);

  const columns = [
    { header: "Name", accessor: "name" },
    { header: "Age", accessor: "age" },
    { header: "Email", accessor: "email" },
  ];

  const data = [
    { name: "Alice", age: 25, email: "alice@example.com" },
    { name: "Bob", age: 30, email: "bob@example.com" },
    { name: "Charlie", age: 22, email: "charlie@example.com" },
  ];

  return (
    <>
      {/* <Table columns={columns} data={data} /> */}
      <div>{JSON.toString(users)}</div>
    </>
  );
}
