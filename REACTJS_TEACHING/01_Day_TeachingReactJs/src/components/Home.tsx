import React from "react";

interface HomeProps {
  name: string;
}

const Home: React.FC<HomeProps> = ({ name }) => {
  return <div>Home - {name}</div>;
};

export default Home;
