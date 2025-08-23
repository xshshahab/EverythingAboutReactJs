import React from "react";
import FormButton from "./FormButton";

const Form: React.FC = () => {
  const myFormAction = async (formData: any) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const newPosts = {
      name: formData("name"),
      email: formData("email"),
      password: formData("password"),
    };

    console.log(newPosts);
  };

  return (
    <form action={myFormAction}>
      <div>
        <label htmlFor="name">Name</label>
        <input
          required
          type="text"
          name="name"
          id="name"
          placeholder="Enter your name"
        />
      </div>
      <div>
        <label htmlFor="email">Email</label>
        <input
          required
          type="email"
          name="email"
          id="email"
          placeholder="Enter your email"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          required
          type="password"
          name="password"
          id="password"
          placeholder="Enter your password"
        />
      </div>

      <FormButton />
    </form>
  );
};

export default Form;
