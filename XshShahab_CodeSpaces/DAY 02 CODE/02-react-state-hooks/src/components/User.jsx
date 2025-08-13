import { useState } from "react";

/* 
  This component is named 'User'.
  It uses the useState hook from React to manage state within the component.
*/
const User = () => {
  /*
    The useState hook is called with an initial value of "XshShahab".
    useState returns an array with two elements:
      - The first element is the current state value ("XshShahab").
      - The second element is a function to update the state.
    Since destructuring is not used, the full array is stored in the variable 'username'.
  */
  const username = useState("XshShahab");

  return (
    <div>
      {/* 
        Displaying the current username.
        Since 'username' is an array, we access the current value using index 0.
      */}
      <h1>{username[0]}</h1>
    </div>
  );
};

export default User;

/*
  Summary:
  - This component displays a username using React state.
  - The useState hook is used to initialize and manage the state.
  - Instead of destructuring, the array returned by useState is accessed using index notation.
*/
