import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (user.length === 0) {
    return <div className="text-center text-gray-400">No User Available.</div>;
  }

  return (
    <div className="p-4">
      <table className="min-w-full border border-gray-600 table-auto">
        <thead className="bg-gray-800">
          <tr>
            <th className="px-4 py-2 text-sm font-semibold text-left text-gray-200 border border-gray-600">
              Username
            </th>
            <th className="px-4 py-2 text-sm font-semibold text-left text-gray-200 border border-gray-600">
              Password
            </th>
          </tr>
        </thead>
        <tbody>
          {user.map(({ username, password }) => (
            <tr key={username} className="hover:bg-gray-700">
              <td className="px-4 py-2 text-sm text-gray-100 border border-gray-600">
                {username}
              </td>
              <td className="px-4 py-2 text-sm text-gray-100 border border-gray-600">
                {password}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Profile;
