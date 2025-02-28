# React Custom Hook

A **custom hook** in React is a JavaScript function that starts with the prefix `use` and allows you to reuse stateful logic between different components. Custom hooks enable you to encapsulate logic (like managing state, side effects, context, etc.) in one place and share it across your application, making your components cleaner and more modular.

## Why Use Custom Hooks?

1. **Code Reusability**: If you find yourself repeating logic in multiple components, you can extract that logic into a custom hook and reuse it.
2. **Cleaner Components**: By abstracting complex logic into custom hooks, components become easier to read and maintain.
3. **Better Organization**: Grouping related logic together makes it easier to manage and test.

## Basic Structure of a Custom Hook

A custom hook is essentially a function that uses React's built-in hooks (like `useState`, `useEffect`, etc.) and returns values or functions that can be used by components.

### Example: `useCounter` Hook

```javascript
import { useState } from "react";

function useCounter(initialCount = 0) {
  // useState hook to track the counter value
  const [count, setCount] = useState(initialCount);

  // Function to increment the counter
  const increment = () => setCount(count + 1);

  // Function to decrement the counter
  const decrement = () => setCount(count - 1);

  // Return the counter value and functions to change it
  return { count, increment, decrement };
}

export default useCounter;
```

## Explanation

`useCounter` is the custom hook that encapsulates the logic for managing a counter state. It uses the `useState` hook to store the counter value. It exposes increment and decrement functions to modify the counter. The `useCounter` hook returns the `count` value and the two functions, which can be used by components.

### Using the Custom Hook in a Component

You can now use this custom hook inside any component:

```javascript
import React from "react";
import useCounter from "./useCounter";

function Counter() {
  // Using the custom hook
  const { count, increment, decrement } = useCounter(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
```

## Explanation

`useCounter` is used just like a normal hook inside the `Counter` component.  
It returns the `count` and the functions `increment` and `decrement`, which are then used in the component.  
Now, the `Counter` component is cleaner and doesn’t contain the logic for state management—it’s all encapsulated within the custom hook.

## Key Points

- **Naming Convention**: A custom hook should always start with the prefix `use`. This is necessary for React to recognize it as a hook and apply the appropriate rules (like hooks must be called at the top level and cannot be called conditionally).

- **Custom Hooks Use Built-in Hooks**: Custom hooks are just JavaScript functions that use React’s built-in hooks (like `useState`, `useEffect`, `useContext`, etc.).

- **Return Values**: Custom hooks return values and functions to make the logic accessible to the component using the hook.

- **No Rendering**: Custom hooks don’t render UI. They are just used for logic and can be used within components that do render UI.
