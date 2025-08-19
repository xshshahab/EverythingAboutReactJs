import { useId } from "react";

const UniqueId = () => {
  const id = useId();

  return (
    <div>
      <section>
        <label htmlFor={`${id}-email`}>Email</label>
        <input type="email" name="email" id={`${id}-email`} />
      </section>
      <section>
        <label htmlFor={`${id}-password`}>Password</label>
        <input type="password" name="password" id={`${id}-password`} />
      </section>
    </div>
  );
};

export default UniqueId;
