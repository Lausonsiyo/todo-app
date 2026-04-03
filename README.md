# 📝 React Todo App

A simple and scalable Todo application built with React to practice core frontend concepts such as state management, component architecture, and immutable data handling.

---

## 🚀 Features

- ✅ Add new tasks
- 🗑️ Delete tasks
- ✔️ Mark tasks as completed (toggle)
- ♻️ Reusable component structure
- ⚛️ State management using React Hooks (`useState`)
- 🎯 Clean and scalable architecture

---

## 🧠 What I Practiced

This project focuses on strengthening fundamental React skills:

- Managing state with `useState`
- Handling user input (controlled components)
- Updating arrays immutably using:
  - `map()` (update/toggle)
  - `filter()` (delete)
- Passing data and functions via props
- Component separation and reusability
- Basic UI/UX improvements with CSS

---

## 🧱 Project Structure

src/
├── App.jsx
├── Main/
│ └── Main.jsx
├── TaskList/
│ └── TaskList.jsx
├── Header/
├── Footer/

---

## ⚙️ How It Works

### ➕ Add Task

- User types into input
- Clicks "Add Task"
- A new task object is created:

```js
{
  id: Date.now(),
  text: task,
  completed: false
}
```
