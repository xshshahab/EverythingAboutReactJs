const Greeting = () => {
  const name = "XshShahab";
  const date = new Date().toString();

  return (
    <div>
      <h1>My Name is : {name}</h1>
      <p>Current Date : {date}</p>
    </div>
  );
};

export default Greeting;
