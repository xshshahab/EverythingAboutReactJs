import React from "react";
import { useFormStatus } from "react-dom";

const FormButton: React.FC = () => {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
};

export default FormButton;
