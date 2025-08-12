# What is React JS?

**React JS** is an **open-source JavaScript library** created by Facebook for building **user interfaces**, especially **single-page applications (SPAs)** where the content updates dynamically without reloading the whole page.

---

### **Key Points**

- **UI Library** → Helps you build reusable, interactive components (buttons, forms, cards, etc.).
- **Component-Based** → Your UI is broken into small, reusable pieces called _components_.
- **Declarative** → You describe _what_ the UI should look like, and React updates it automatically when the data changes.
- **Virtual DOM** → React uses a lightweight copy of the DOM to update only what’s necessary, making it faster.
- **JSX Syntax** → You can write HTML-like code inside JavaScript.

---

### **Why Use React JS?**

1. **Reusability** – Build components once and reuse them anywhere.
2. **Performance** – Faster updates using the Virtual DOM.
3. **Ecosystem** – Huge community, libraries, and tools.
4. **Cross-Platform** – Same concepts can be used for web (React JS) and mobile (React Native).

---

### **Simple Example**

```jsx
import React from "react";

function Welcome() {
  return <h1>Hello, World!</h1>;
}

export default Welcome;
```

This small component displays **Hello, World!** on the screen.

---

## What is components ?

In **React JS**, a **component** is simply a **reusable piece of UI** — like a small building block that you can combine to create an entire web page or application.

Think of them like **LEGO pieces** 🧱:

- One piece could be a button, another a form, another a header.
- You can reuse the same piece in multiple places, and if you change it once, it updates everywhere.

---

## **Types of Components in React**

### 1. **Functional Components** (Most Common)

- Just JavaScript functions that return JSX (UI code).
- Example:

```jsx
function Greeting() {
  return <h1>Hello, React!</h1>;
}
```

---

### 2. **Class Components** (Older way, less common now)

- Use ES6 `class` syntax.
- Example:

```jsx
import React, { Component } from "react";

class Greeting extends Component {
  render() {
    return <h1>Hello, React!</h1>;
  }
}
```

---

## **Why Components Are Useful**

1. **Reusability** → Use the same code in multiple places.
2. **Separation of concerns** → Each component handles one thing (e.g., navbar, footer).
3. **Maintainability** → Easier to update and debug.

---

## **Example of Component Reuse**

```jsx
function Button({ label }) {
  return <button>{label}</button>;
}

export default function App() {
  return (
    <>
      <Button label="Login" />
      <Button label="Sign Up" />
    </>
  );
}
```

Here, `Button` is a **single component**, but we use it twice with different labels.

---

## { Expression in JSX }

In **React JSX**, `{ expression }` is a way to **embed JavaScript logic** inside your UI code.

Think of JSX as HTML + JavaScript combined — the `{ }` tells React:
_"Hey, this part is JavaScript, evaluate it and put the result here."_

---

## **1. What Can Go Inside `{ }`?**

Anything that **evaluates to a value** in JavaScript:

- Variables
- Function calls
- Math calculations
- Conditional expressions (ternary)
- Array methods like `map()`

---

### **Example: Variables**

```jsx
function App() {
  const name = "Shahab";
  return <h1>Hello, {name}!</h1>;
}
```

💡 Output: `Hello, Shahab!`

---

### **Example: Calculations**

```jsx
function App() {
  const x = 5,
    y = 10;
  return <p>Sum: {x + y}</p>;
}
```

💡 Output: `Sum: 15`

---

### **Example: Function Calls**

```jsx
function greet(user) {
  return `Hello, ${user}`;
}

function App() {
  return <h1>{greet("Shahab")}</h1>;
}
```

💡 Output: `Hello, Shahab`

---

### **Example: Conditional (Ternary)**

```jsx
function App() {
  const isLoggedIn = true;
  return <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>;
}
```

---

## **Important Notes**

❌ You **cannot** put statements (like `if`, `for`) directly inside `{ }` in JSX.
✅ Use expressions that **return a value**.
