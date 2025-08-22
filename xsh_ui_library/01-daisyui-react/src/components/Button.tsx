import React from "react";

const Button: React.FC = () => {
  return (
    <>
      <button className="btn btn-soft">Default</button>
      <button className="btn btn-soft btn-primary">Primary</button>
      <button className="btn btn-soft btn-secondary">Secondary</button>
      <button className="btn btn-soft btn-accent">Accent</button>
      <button className="btn btn-soft btn-info">Info</button>
      <button className="btn btn-soft btn-success">Success</button>
      <button className="btn btn-soft btn-warning">Warning</button>
      <button className="btn btn-soft btn-error">Error</button>
    </>
  );
};

export default Button;
