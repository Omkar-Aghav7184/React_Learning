# 🧠 React Virtual DOM, Fibre Algorithm, Reconciliation & Hydration — Notes
---
## 🔁 What happens when a webpage updates?

### 1. 🧠 What is `createRoot` in React?

- When you use `createRoot`, React creates a **Virtual DOM** — a copy of the actual DOM in memory.
- It compares this Virtual DOM with the browser's real DOM.
- **Only the changed parts** are updated in the real DOM.

✅ **Example**:  
If you change your name in a form, React only updates the name field, not the entire form.

---

### 2. 🌐 What does a regular browser reload do?

- A browser reload (like pressing **F5**) **removes the whole page** and **builds it again** from scratch.
- Even if only one value changes, the **entire page is rebuilt**.

⚠️ **Example**:  
Changing just one word in a paragraph still reloads all images, layout, and styles.

---

### 3. 🌳 What is the Virtual DOM?
- React keeps a copy of the DOM in memory — a Virtual DOM, like a tree structure.
- When something changes, React checks what exactly changed in the tree, and only updates that part on the real page.
- React creates a **tree-like structure** of the UI (Virtual DOM).
- When updates happen, React compares the new tree with the old one and updates **only what’s different**.

✅ **Example**:  
You check a checkbox — React only updates that checkbox's state instead of rerendering the full form.

---

### 4. 🌐 What about values from network calls (like APIs)?

- Some UI values depend on **API or network responses**.
- If you update a value immediately, and then it updates again after the network response, it may cause **double updates**.

⚠️ **Example**:  
You type a message and it shows up instantly. After server confirmation, it may refresh again.

---

### 5. 🛑 Can we avoid extra updates?

- Yes, to reduce unnecessary re-renders, we can **delay or skip immediate updates** until the data is stable.

✅ **Example**:  
Don't send every keystroke to the server — wait until the user finishes typing.

---

### 6. 🧵 What is React Fiber?

- React uses a smart algorithm called React Fiber.
- It helps React to decide what to update, when to update, and how to do it efficiently.
- **React Fiber** is the smart algorithm React uses to:
  - Break work into small units
  - Prioritize updates
  - Manage smooth UI performance

---

### 7. 🔄 What is Reconciliation?

- Reconciliation is the process where React:
  - Compares the **Virtual DOM** and the **Real DOM**
  - Finds the **differences**
  - Updates only what’s needed

✅ **Example**:  
Like a “spot the difference” puzzle — React spots changes and updates them.

---

### 8. 🌟 Virtual DOM vs Reconciliation

- **Virtual DOM** is the idea.
- **Reconciliation** is the logic that powers it.
- Reconciliation is the algorithm that makes Virtual DOM **efficient and fast**.

---

### 9. 🐢 Not all updates need to happen immediately

- It’s okay to **delay low-priority updates** so that high-priority updates run smoothly.

✅ **Example**:  
Typing in a search bar doesn’t need instant results on every keystroke — React waits for a pause.

---

## 💧 What is Hydration in React?

- When a page first loads:
  1. The HTML is already visible (from the server).
  2. But buttons or inputs **don’t work** immediately because **JavaScript hasn’t loaded** yet.
  3. After JavaScript loads, React **connects to the HTML** and makes it **interactive**.

- This process is called **Hydration**.

✅ Example:
You open a React webpage. You see a button labeled "Submit", but when you click it, nothing happens at first. After 1–2 seconds, it starts working — that's hydration in action!

🧠 Hydration uses the **React Fiber Algorithm** to make things interactive efficiently and fast.

---
