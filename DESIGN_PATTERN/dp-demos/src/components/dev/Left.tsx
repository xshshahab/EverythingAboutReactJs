import { Contact2, Home, Projector, Settings, User } from "lucide-react";

const Left = () => {
  return (
    <div className="bg-teal-400 h-screen">
      <ul className="flex items-center p-2  flex-col gap-2 w-full">
        <li className="p-2 w-full mt-2 rounded-2xl hover:bg-green-200">
          <a className="flex items-center gap-2" href="">
            <Home /> Home
          </a>
        </li>
        <li className="p-2 w-full  rounded-2xl hover:bg-green-200">
          <a className="flex items-center gap-2" href="">
            <User /> About
          </a>
        </li>
        <li className="p-2 w-full  rounded-2xl hover:bg-green-200">
          <a className="flex items-center gap-2" href="">
            <Contact2 /> Contact
          </a>
        </li>
        <li className="p-2 w-full  rounded-2xl hover:bg-green-200">
          <a className="flex items-center gap-2" href="">
            <Settings /> Service
          </a>
        </li>
        <li className="p-2 w-full  rounded-2xl hover:bg-green-200">
          <a className="flex items-center gap-2" href="">
            <Projector /> Portfolio
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Left;
