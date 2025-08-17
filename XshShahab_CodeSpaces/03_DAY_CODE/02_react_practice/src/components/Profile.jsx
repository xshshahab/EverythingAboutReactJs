import { useState } from "react";

const Profile = () => {
  const [prf, setPrf] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setPrf((prevPrf) => ({
      ...prevPrf,
      [name]: value,
    }));
  };

  return (
    <div>
      <div id="form">
        <div id="form-name">
          <label htmlFor="name">Name</label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={prf.name}
            onChange={handleChange}
          />
        </div>
        <div id="form-age">
          <label htmlFor="age">Age</label>
          <input
            name="age"
            type="text"
            placeholder="Enter your age"
            value={prf.age}
            onChange={handleChange}
          />
        </div>
      </div>

      <div id="user">
        <h1>Name: {prf.name}</h1>
        <h1>Age: {prf.age}</h1>
      </div>
    </div>
  );
};

export default Profile;
