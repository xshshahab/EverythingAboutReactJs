import { FaUserCircle } from "react-icons/fa";

interface UserCardProps {
  name: string;
  following: boolean;
  index?: number;
}

const UserCard = ({ name, index, following }: UserCardProps) => {
  return (
    <div key={index} className="flex items-center justify-between">
      <section className="flex items-center">
        <FaUserCircle className="mr-3 text-3xl text-gray-500" />
        <span>{name}</span>
      </section>
      <button
        className={`px-4 py-1 text-sm rounded-full ${
          following ? "bg-black text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        {following ? "Following" : "Follow"}
      </button>
    </div>
  );
};

export default UserCard;
