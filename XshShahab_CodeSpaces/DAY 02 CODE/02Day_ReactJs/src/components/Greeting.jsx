const Greeting = ({ timeOfDay }) => {
  return timeOfDay === "morning" || "Morning" ? (
    <h1>Good Morning</h1>
  ) : (
    <h1>Good Afternoon</h1>
  );
};

export default Greeting;
