import React from "react";

const Form: React.FC = () => {
  const formAction = (formData: any) => {
    const userData = {
      name: formData.get("name"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    console.log("Userdata: ", userData);
  };

  return (
    <form action={formAction}>
      <div id="name">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
      </div>
      <div id="email">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
      </div>

      <div id="password">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
