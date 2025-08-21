import React, { useState, type ChangeEvent, type FormEvent } from "react";

type ContactDataState = {
  phoneNumber: string;
  fullName: string;
  email: string;
};

const ContactForm: React.FC = () => {
  const [contactData, setContactData] = useState<ContactDataState>({
    phoneNumber: "",
    fullName: "",
    email: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setContactData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Form Data: ${contactData}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Fullname:{" "}
          <input
            type="text"
            name="name"
            value={contactData.fullName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="email">
          Email:{" "}
          <input
            type="email"
            name="email"
            value={contactData.fullName}
            onChange={handleChange}
          />
        </label>
        <label htmlFor="phoneNumber">
          Phone number:{" "}
          <input
            type="text"
            name="phoneNumber"
            value={contactData.fullName}
            onChange={handleChange}
          />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
