import React, { useEffect, useState } from "react";

interface UserState {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserState[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const url = "https://jsonplaceholder.typicode.com/users";
      try {
        const response = await fetch(url);
        if (!response.ok) throw new Error("Network response was not ok");
        const result: UserState[] = await response.json();
        setUsers(result);
      } catch (error) {
        setError(error instanceof Error ? error.message : "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
        <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.1s] mx-1"></div>
        <div className="w-3 h-3 bg-indigo-400 rounded-full animate-bounce [animation-delay:0.2s]"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center h-screen bg-gray-900">
        <div className="max-w-md px-6 py-4 text-center text-red-400 bg-gray-800 border border-red-500 rounded">
          <strong className="font-bold">Error: </strong>
          <span>{error}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 text-white bg-gray-900">
      <h1 className="mb-6 text-3xl font-bold text-center text-indigo-400">
        User Details
      </h1>
      <div className="overflow-x-auto">
        <table className="min-w-full border border-gray-700 divide-y divide-gray-700 rounded-md shadow-md">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase">
                Name
              </th>
              <th className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase">
                Username
              </th>
              <th className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase">
                Email
              </th>
              <th className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase">
                Phone
              </th>
              <th className="px-6 py-3 text-xs font-semibold tracking-wider text-left text-gray-400 uppercase">
                Website
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-900 divide-y divide-gray-700">
            {users.map((user, index) => (
              <tr
                key={user.id}
                className={`${
                  index % 2 === 0 ? "bg-gray-900" : "bg-gray-800"
                } hover:bg-gray-700 transition duration-200`}
              >
                <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.username}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                <td className="px-6 py-4 whitespace-nowrap">{user.phone}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <a
                    href={`http://${user.website}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-indigo-400 hover:underline"
                  >
                    {user.website}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
