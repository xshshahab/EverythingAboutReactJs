import React, { useActionState } from "react";

const increment = async (previousState: any, formData: any) => {
  console.log(formData.get("name"));
  return previousState + 1;
};

const Count: React.FC = () => {
  const [state, formAction] = useActionState(increment, 0);

  return (
    <form>
      <h1>Count: {state}</h1>
      <button formAction={formAction}>Increment</button>
      <br />
      <hr />
      <br />

      <input
        type="text"
        name="name"
        id="name"
        placeholder="Please Enter Your Name"
      />
    </form>
  );
};

export default Count;
