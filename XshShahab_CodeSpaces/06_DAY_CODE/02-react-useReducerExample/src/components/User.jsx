import { useReducer } from "react";
import { initialState, userRed } from "../reducer/UserReducer";

const User = () => {
  const [state, dispatch] = useReducer(userRed, initialState);
  return (
    <section>
      <div>
        <input
          onChange={(event) =>
            dispatch({
              value: event.target.value,
              type: "name",
            })
          }
          required
          type="text"
          placeholder="Enter Your Name"
        />
        <input
          onChange={(event) =>
            dispatch({
              value: event.target.value,
              type: "email",
            })
          }
          required
          type="email"
          placeholder="Enter Your Email"
        />
        <input
          onChange={(event) =>
            dispatch({
              value: event.target.value,
              type: "age",
            })
          }
          required
          type="text"
          placeholder="Enter Your Age"
        />
        <input
          onChange={(event) =>
            dispatch({
              value: event.target.value,
              type: "password",
            })
          }
          required
          type="password"
          placeholder="Enter Your Password"
        />
        <input
          onChange={(event) =>
            dispatch({
              value: event.target.value,
              type: "city",
            })
          }
          required
          type="text"
          placeholder="Enter Your City"
        />
        <input
          onChange={(event) =>
            dispatch({
              value: event.target.value,
              type: "address",
            })
          }
          required
          type="text"
          placeholder="Enter Your Address"
        />
      </div>
      <div>
        <h3>Name: {state.name}</h3>
        <h3>Email: {state.email}</h3>
        <h3>Password: {state.password}</h3>
        <h3>Age: {state.age}</h3>
        <h3>City: {state.city}</h3>
        <h3>Address: {state.address}</h3>
      </div>
    </section>
  );
};

export default User;
