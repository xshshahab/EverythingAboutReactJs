import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import Tabs from "./Tabs";

const Profile: React.FC = () => {
  const [bannerUrl, setBannerUrl] = useState<string>(
    "https://via.placeholder.com/1500x400"
  );

  const [profileUrl, setProfileUrl] = useState<string>(
    "https://via.placeholder.com/100"
  );

  const handleBannerChange = (event: any) => {
    const file = event.target.files[0];

    if (file) {
      setBannerUrl(URL.createObjectURL(file));
    }
  };

  const handleProfileChange = (event: any) => {
    const file = event.target.files[0];
    if (file) {
      setProfileUrl(URL.createObjectURL(file));
    }
  };

  return (
    <div className="relative w-[94%] ml-[5rem]">
      <div className="relative">
        <img
          src={bannerUrl}
          alt={bannerUrl}
          className="object-cover w-full h-60"
        />
        <button className="absolute bg-gray-800 rounded-full hover:bg-gray-600 top-2 right-2 text-gray-50">
          <label htmlFor="banner-upload" className="cursor-pointer">
            <FaCamera size={24} />
          </label>
          <input
            type="file"
            name="banner-upload"
            id="banner-upload"
            accept="image/*"
            className="hidden"
            onChange={handleBannerChange}
          />
        </button>
      </div>
      {/* Channel Logo */}
      <div className="flex items-center ml-4 mt-[2rem]">
        <img
          src={profileUrl}
          alt="profile url"
          className="relative object-cover w-40 h-40 border-white rounded-full"
        />

        <button className="absolute -ml-[6rem] z-10 mt-[9rem] bg-gray-800 text-white hover:bg-gray-600 p-2 rounded-full">
          <label htmlFor="profile-upload" className="cursor-pointer">
            <FaCamera size={20} />
          </label>
          <input
            type="file"
            name="profile-upload"
            id="profile-upload"
            className="hidden"
            accept="image/*"
            onChange={handleProfileChange}
          />
        </button>

        <div className="mt-4 ml-4">
          <h1 className="text-2xl font-bold ml-[4rem]">XshShahab YT</h1>
          <div className="mt-2 ml-[4rem]">
            <p>1M views</p>
            <p className="mt-2">
              This is a short description of the Youtube Channel. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Explicabo, sapiente.
            </p>
          </div>
          <button className="bg-red-600 text-white hover:bg-red-500 mt-4 ml-[4rem] py-2 px-4">
            Subscribe
          </button>
        </div>
      </div>
      <Tabs />
    </div>
  );
};

export default Profile;
