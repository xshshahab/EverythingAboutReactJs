import React from "react";
import UserCard from "./UserCard";

const peopleToFollow = [
  { name: "Md. Shahabuddin", following: false },
  { name: "Md. Irfan", following: true },
  { name: "Aliya", following: true },
  { name: "Md. Mizan Ahsan", following: false },
  { name: "Nayatola Wali", following: false },
];

const PeopleToFollow: React.FC = () => {
  return (
    <div className="p-4 bg-white rounded-lg shadow">
      <h3 className="mb-4 text-lg font-semibold">👥 People who to follow</h3>
      <div className="space-y-4">
        {peopleToFollow.map(({ name, following }, index) => {
          return <UserCard key={index} name={name} following={following} />;
        })}
      </div>
    </div>
  );
};

export default PeopleToFollow;
