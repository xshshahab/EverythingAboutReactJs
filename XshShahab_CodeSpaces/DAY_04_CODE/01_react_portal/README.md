## React Portal

A **React Portal** is a way to render a component **outside of its parent DOM hierarchy**, while still keeping it connected to React’s virtual DOM.

---

### 🔍 Why Use a Portal?

Normally, React components render inside their parent’s DOM structure. But sometimes, you want to **break out** of that structure — for example, to:

- Show **modals**, **tooltips**, or **dropdowns** that overlay everything else
- Avoid **CSS overflow** or **z-index** issues
- Render content at the root level of the HTML document

---

### ✅ How It Works

React provides the `createPortal` function:

```jsx
import ReactDOM from "react-dom";

ReactDOM.createPortal(child, container);
```

- `child`: The React element you want to render
- `container`: The DOM node you want to render into (outside the main React tree)

---

### 🧠 Example

#### HTML (public/index.html)

```html
<body>
  <div id="root"></div>
  <div id="modal-root"></div>
  <!-- Portal target -->
</body>
```

#### React Component

```jsx
import React from "react";
import ReactDOM from "react-dom";

const Modal = ({ children }) => {
  return ReactDOM.createPortal(
    <div className="modal">{children}</div>,
    document.getElementById("modal-root") // outside of #root
  );
};

export default Modal;
```

#### Usage

```jsx
<Modal>
  <p>This content is rendered in a portal!</p>
</Modal>
```

---

### 📝 Summary

- A **portal** renders a component **into a different part of the DOM**, not necessarily where its parent is.
- It’s great for **UI elements that float** (like modals).
- React keeps the **event handling and reactivity intact**, even though the element is rendered elsewhere in the DOM.
