import React from "react";

const topics = [
  "RWA Tokenization",
  "Gaming NFTs",
  "AI-Generated NFTs",
  "Crypto Regulations",
  "DeFi Integration",
  "Fractional Ownership",
  "Metaverse NFTs",
  "Blockchain Gaming",
  "Crypto ETFs",
  "Digital Arrest Scams",
];

const TopicsList: React.FC = () => {
  return (
    <div className="max-w-2xl p-6 mx-auto mt-8 bg-white shadow-lg rounded-xl">
      <h3 className="mb-6 text-2xl font-bold text-center text-gray-900">
        Trending Topics in Crypto & NFTs
      </h3>
      <div className="flex flex-wrap justify-center gap-3">
        {topics.map((topic) => (
          <span
            key={topic + "-xsh"}
            className="px-4 py-2 text-sm font-medium text-indigo-700 transition-colors duration-200 bg-white rounded-full shadow-sm cursor-pointer hover:bg-indigo-100 hover:text-indigo-900"
          >
            {topic}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TopicsList;
