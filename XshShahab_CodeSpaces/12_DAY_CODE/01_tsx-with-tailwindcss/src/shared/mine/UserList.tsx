import React, { useEffect, useState } from "react";

interface UserState {
  id: number;
  name: string;
  email: string;
  username: string;
  phone: string;
  website: string;
  company: {
    bs: string;
    catchPhrase: string;
    name: string;
  };
  address: {
    city: string;
    street: string;
    suite: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

const UserList: React.FC = () => {
  const [users, setUsers] = useState<UserState[]>([]);

  useEffect(() => {
    let url = "https://jsonplaceholder.typicode.com/users";
    fetch(url)
      .then((response) => response.json())
      .then((result) => setUsers(result));
  }, []);

  return (
    <div className="min-h-screen p-6 text-gray-100 bg-gradient-to-br from-gray-900 via-black to-gray-800">
      <h1 className="mb-10 text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-indigo-400 to-purple-500 bg-clip-text drop-shadow-lg">
        Everything About Users
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {users.map((user) => (
          <section
            key={user.id}
            className="p-6 transition-all border border-gray-700 shadow-lg bg-gray-800/70 backdrop-blur-lg rounded-2xl hover:shadow-2xl hover:border-indigo-500"
          >
            {/* User Info */}
            <h2 className="mb-1 text-2xl font-semibold text-indigo-400">
              {user.name}
            </h2>
            <h3 className="mb-4 text-sm text-gray-400">@{user.username}</h3>

            <div className="space-y-2 text-sm">
              <p>
                <span className="font-medium text-gray-300">📧 </span>
                {user.email}
              </p>
              <p>
                <span className="font-medium text-gray-300">📱 </span>
                {user.phone}
              </p>
              <p>
                <span className="font-medium text-gray-300">🌐 </span>
                <a
                  href={`https://${user.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-400 transition hover:underline hover:text-indigo-300"
                >
                  {user.website}
                </a>
              </p>
            </div>

            {/* Company Section */}
            <div className="pt-3 mt-5 border-t border-gray-700">
              <h4 className="mb-2 text-sm font-semibold text-purple-400">
                🏢 Company
              </h4>
              <p className="text-sm text-gray-200">{user.company.name}</p>
              <p className="text-xs italic text-gray-400">
                "{user.company.catchPhrase}"
              </p>
              <p className="text-xs text-gray-500">{user.company.bs}</p>
            </div>

            {/* Address Section */}
            <div className="pt-3 mt-5 border-t border-gray-700">
              <h4 className="mb-2 text-sm font-semibold text-green-400">
                📍 Address
              </h4>
              <p className="text-sm">
                {user.address.street}, {user.address.suite}
              </p>
              <p className="text-sm">
                {user.address.city}, {user.address.zipcode}
              </p>
              <p className="text-xs text-gray-400">
                Lat: {user.address.geo.lat} | Lng: {user.address.geo.lng}
              </p>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default UserList;
