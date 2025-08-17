# Conditional Rendering

## Weather.jsx file code explanation

Great — you’ve updated your `Weather` component to take a **dynamic temperature as a prop**, which is exactly how React components should ideally work. Let's walk through it and also provide the **ternary version** for comparison.

---

### ✅ Your Current Code (with `props`):

```jsx
const Weather = (props) => {
  let temp = props.temp;

  if (temp < 15) {
    return <div>It's Cold outside</div>;
  } else if (temp >= 15 && temp <= 25) {
    return <div>It's Nice outside</div>;
  } else if (temp > 25) {
    return <div>It's hot outside</div>;
  }
};

export default Weather;
```

#### ✔️ Behavior:

- This component now responds dynamically based on the `temp` prop.
- You can now use it like this:

  ```jsx
  <Weather temp={10} /> // Renders: It's Cold outside
  <Weather temp={20} /> // Renders: It's Nice outside
  <Weather temp={30} /> // Renders: It's hot outside
  ```

---

### 🔁 Equivalent Ternary Version:

Here’s how you can rewrite the same logic using **nested ternaries**:

```jsx
const Weather = ({ temp }) => {
  return temp < 15 ? (
    <div>It's Cold outside</div>
  ) : temp <= 25 ? (
    <div>It's Nice outside</div>
  ) : (
    <div>It's hot outside</div>
  );
};

export default Weather;
```

#### ✅ Notes:

- Destructuring `{ temp }` from props makes the code cleaner.
- Nested ternaries work here since the logic is relatively simple, but can get hard to read if you add more conditions.

---

### 🧠 Best Practice:

If you're working on a team or building something that could grow, prefer the **`if-else` version** for better clarity. But for small, clear components like this, either version is perfectly fine.

---

## UserStatus.jsx file code explanation

Both of the following code snippets **are logically correct** and achieve **similar goals**, but they are used in **different contexts** and have **slight differences in syntax and flexibility**.

---

### 🔹 Snippet 1 (Your main component):

```jsx
const UserStatus = ({ loggedIn, isAdmin }) => {
  if (loggedIn && isAdmin) {
    return <h1>Welcome! Admin</h1>;
  } else {
    return <div>Welcome! User</div>;
  }
};

export default UserStatus;
```

#### ✅ Explanation:

- This uses a classic `if-else` statement inside a functional component.
- If the user is **logged in and is an admin**, it shows `<h1>Welcome! Admin</h1>`.
- Otherwise, it shows `<div>Welcome! User</div>`.
- This structure gives you flexibility to add more complex logic in future.

---

### 🔹 Snippet 2 (Ternary expression):

```jsx
loggedIn && isAdmin ? <h1>Welcome Admin</h1> : <h2>Welcome User</h2>;
```

#### ✅ Explanation:

- This is a **ternary conditional expression** used inside JSX.
- It’s more concise but best suited for **simpler conditional rendering**.
- You can use this inline inside a component's `return`, like:

```jsx
return loggedIn && isAdmin ? <h1>Welcome Admin</h1> : <h2>Welcome User</h2>;
```

---

### ✅ Which One Is “Correct”?

**Both are correct**, depending on your use case:

| Use Case                              | Recommended Approach               |
| ------------------------------------- | ---------------------------------- |
| Simple one-line conditional rendering | ✅ Ternary expression              |
| More complex or multiple conditions   | ✅ `if-else` statement in function |
| Want to improve readability           | ✅ Use full `if-else` structure    |

---

### ⚠️ Note:

There’s a **minor inconsistency** in your code:

```jsx
<h1>Welcome! Admin</h1> vs <h1>Welcome Admin</h1>
```

And:

```jsx
<div>Welcome! User</div> vs <h2>Welcome User</h2>
```

You should ideally **standardize the tags and content**, like:

```jsx
<h1>Welcome Admin</h1> : <h1>Welcome User</h1>
```

or

```jsx
<div>Welcome Admin</div> : <div>Welcome User</div>
```

---

## Greeting.jsx file code explanation

#### 🔹 Your Original Ternary Version:

```jsx
const Greeting = ({ timeOfDay }) => {
  return timeOfDay === "morning" ? (
    <h1>Good Morning</h1>
  ) : (
    <h1>Good Afternoon</h1>
  );
};

export default Greeting;
```

#### ✅ How it works:

- If `timeOfDay` is `"morning"`, it shows: `<h1>Good Morning</h1>`
- Otherwise, it shows: `<h1>Good Afternoon</h1>`
- This is a **ternary operator** used for concise conditional rendering.

---

### 🔸 Equivalent Using `if-else`:

Here’s how you can rewrite it using the `if-else` syntax:

```jsx
const Greeting = ({ timeOfDay }) => {
  if (timeOfDay === "morning") {
    return <h1>Good Morning</h1>;
  } else {
    return <h1>Good Afternoon</h1>;
  }
};

export default Greeting;
```

#### ✅ This version is:

- More readable for beginners or complex conditions
- Easier to expand later (e.g., adding `"evening"` or `"night"` cases)

---

### ⚡ Bonus: Expanded Version (if you plan to support more times)

```jsx
const Greeting = ({ timeOfDay }) => {
  if (timeOfDay === "morning") {
    return <h1>Good Morning</h1>;
  } else if (timeOfDay === "afternoon") {
    return <h1>Good Afternoon</h1>;
  } else if (timeOfDay === "evening") {
    return <h1>Good Evening</h1>;
  } else {
    return <h1>Hello!</h1>;
  }
};

export default Greeting;
```
