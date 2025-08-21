import React, { useRef, useState, type FormEvent } from "react";

type FormState = {
  name: string;
  email: string;
  password: string;
};

const Form: React.FC = () => {
  const [submittedData, setSubmittedData] = useState<FormState>({
    name: "",
    email: "",
    password: "",
  });

  const nameRef = useRef<HTMLInputElement>(null);

  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const nameValue = nameRef.current!.value;
    const emailValue = emailRef.current!.value;
    const passwordValue = passwordRef.current!.value;

    setSubmittedData({
      name: nameValue,
      email: emailValue,
      password: passwordValue,
    });
  };

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" placeholder="Enter your name" ref={nameRef} />
        <input type="email" placeholder="Enter your email" ref={emailRef} />
        <input
          type="password"
          placeholder="Enter your password"
          ref={passwordRef}
        />

        <button type="submit">Submit</button>
      </form>
      <section>
        <h1>Name: {submittedData.name}</h1>
        <h1>Email: {submittedData.email}</h1>
        <h1>Password: {submittedData.password}</h1>
      </section>
    </>
  );
};

export default Form;
