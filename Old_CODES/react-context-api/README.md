# React.js Context API

The **React Context API** is a way to manage global state in a React application without needing to pass props manually at every level. It provides a way to share values between components without **prop drilling**.

---

## 1. When to Use Context API?

- When multiple components need access to the same data (e.g., authentication, theme, language settings).
- To avoid **prop drilling** (passing props through multiple layers of components).
- As an alternative to state management libraries like Redux or Recoil.

---

## 2. Creating and Using Context API

The Context API consists of three main parts:

1. **Create Context** – `React.createContext()`
2. **Provide Context** – `<Context.Provider>`
3. **Consume Context** – `useContext()`

### Step 1: Create a Context

Create a separate file (e.g., `ThemeContext.js`).

```jsx
import { createContext } from "react";

const ThemeContext = createContext(null);

export default ThemeContext;
```

### Step 2: Provide the Context

Wrap your application (or part of it) with the `Provider` and pass a value.

```jsx
import React, { useState } from "react";
import ThemeContext from "./ThemeContext";
import ChildComponent from "./ChildComponent";

const App = () => {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <ChildComponent />
    </ThemeContext.Provider>
  );
};

export default App;
```

### Step 3: Consume the Context in a Child Component

Use `useContext` to access the context values.

```jsx
import React, { useContext } from "react";
import ThemeContext from "./ThemeContext";

const ChildComponent = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ChildComponent;
```

---

## 3. **Using Context API with Class Components**

If you're using class components, you can use the `Context.Consumer` component.

```jsx
import React from "react";
import ThemeContext from "./ThemeContext";

class ChildComponent extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        {({ theme, setTheme }) => (
          <div
            style={{
              background: theme === "light" ? "#fff" : "#333",
              color: theme === "light" ? "#000" : "#fff",
            }}
          >
            <p>Current Theme: {theme}</p>
            <button
              onClick={() => setTheme(theme === "light" ? "dark" : "light")}
            >
              Toggle Theme
            </button>
          </div>
        )}
      </ThemeContext.Consumer>
    );
  }
}

export default ChildComponent;
```

## 4. **Using Context API with a Custom Hook**

To simplify usage, you can create a custom hook:

```jsx
import { useContext } from "react";
import ThemeContext from "./ThemeContext";

const useTheme = () => useContext(ThemeContext);

export default useTheme;
```

Now, you can use it like this:

```jsx
import React from "react";
import useTheme from "./useTheme";

const ChildComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      <p>Current Theme: {theme}</p>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
};

export default ChildComponent;
```

## 5. When NOT to Use Context API

- If the state is frequently updated (Context API isn't optimized for high-frequency state updates).
- If only a few components need access to the state (use **props** instead).
- When performance is a major concern (consider **Redux, Zustand, or Recoil** for large-scale applications).

---

## 6. Context API vs. Redux

| Feature          | Context API                                   | Redux                                          |
| ---------------- | --------------------------------------------- | ---------------------------------------------- |
| Purpose          | Global state management for small/medium apps | Advanced state management for large-scale apps |
| Setup Complexity | Simple                                        | Complex (requires actions, reducers, store)    |
| Performance      | Can cause unnecessary re-renders              | Optimized for performance with selectors       |
| Best Use Case    | Theme, auth, language state                   | Large apps with complex state logic            |

---

## 7. Context API with useReducer (Alternative to Redux)

You can combine Context API with `useReducer` for better state management.

```jsx
import React, { createContext, useReducer } from "react";

const CounterContext = createContext();

const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export const CounterProvider = ({ children }) => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <CounterContext.Provider value={{ state, dispatch }}>
      {children}
    </CounterContext.Provider>
  );
};

export default CounterContext;
```

### Using the Context in a Component:

```jsx
import React, { useContext } from "react";
import CounterContext from "./CounterContext";

const CounterComponent = () => {
  const { state, dispatch } = useContext(CounterContext);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
    </div>
  );
};

export default CounterComponent;
```

## Conclusion

The React Context API is a great tool for managing global state, but it should be used wisely. For simple applications, it's an excellent choice, but for more complex state logic, Redux, Zustand, or Recoil might be better alternatives.

---

## 🌐 Connect with Me

<p align="left">
  <a  target="_blank"  href="https://www.linkedin.com/in/mdshahabuddin82/">
    <img src="https://img.icons8.com/color/48/000000/linkedin.png"/>
  </a>
  <a   target="_blank" href="https://x.com/xsh_shahab">
    <img src="https://img.icons8.com/color/48/000000/twitter.png"/>
  </a>
  <a  target="_blank"  href="https://github.com/xshshahab">
    <img src="https://img.icons8.com/ios-glyphs/48/000000/github.png"/>
  </a>
  <a   target="_blank" href="https://instagram.com/xsh_shahab">
    <img src="https://img.icons8.com/color/48/000000/instagram-new.png"/>
  </a>
</p>
