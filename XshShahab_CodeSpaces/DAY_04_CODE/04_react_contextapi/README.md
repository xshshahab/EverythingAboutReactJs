# What is Context API

The **Context API** is a feature in **React** (a JavaScript library for building user interfaces) that allows you to **share state or data across components** without having to manually pass props down through every level of the component tree.

### Why Use Context API?

In a typical React application, data is passed from parent to child via props. This can become cumbersome if the data needs to be accessed by many components at different levels — known as "prop drilling."

The Context API helps you **avoid prop drilling** by providing a way to share values like theme, language, authentication status, etc., across the entire app or part of it.

---

### How It Works

1. **Create Context**

   ```js
   const MyContext = React.createContext();
   ```

2. **Provide Context**
   Wrap your component tree with the `Provider` and pass in the value you want to share.

   ```js
   <MyContext.Provider value={someValue}>
     <MyComponent />
   </MyContext.Provider>
   ```

3. **Consume Context**
   Use `useContext` hook to access the context value in any child component.

   ```js
   const value = useContext(MyContext);
   ```

---

### Example

```js
import React, { createContext, useContext, useState } from "react";

// 1. Create the context
const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");

  return (
    // 2. Provide the context value
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <Toolbar />
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  );
}

function ThemedButton() {
  // 3. Consume the context
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      style={{
        background: theme === "light" ? "#fff" : "#333",
        color: theme === "light" ? "#000" : "#fff",
      }}
    >
      Toggle Theme
    </button>
  );
}
```

---

### When to Use Context API

Use it when:

- You need to share data across many components (e.g., user info, app settings, themes).
- You want to avoid prop drilling.

Avoid using it for:

- Every small piece of data — it can lead to unnecessary re-renders if misused.

---

Would you like a real-world use case or a comparison with other state management tools like Redux?
