# 📝 Todo List Application

An interactive daily task management application built with **React** and **Material-UI**, featuring a modern interface and ease of use.

---

## ✨ Features

| Feature | Description |
|--------|-------|
| ➕ Add Tasks | Add new tasks with a button click or via Enter key |
| ✅ Toggle Completion | Mark tasks as completed or active |
| ✏️ Edit Tasks | Edit task text at any time |
| 🗑️ Delete Tasks | Delete individual tasks or all completed ones |
| 🔍 Smart Filtering | View (All / Active / Completed) with counters |
| 🎨 Responsive Design | Works on all screen sizes |
| 🌙 Dark Mode Support | Compatible with Material-UI themes |

---

## 🛠️ Tech Stack

```json
{
  "React": "18+",
  "Material-UI": "5+",
  "TypeScript": "4+",
  "State Management": "Context API"
}
```

---

## 📦 Installation & Setup

```bash
# 1. Clone the repository
git clone <repository-url>

# 2. Install dependencies
npm install

# 3. Start the application
npm start
```

---

## 📁 Project Structure

```
src/
├── components/
│   ├── TodoList.tsx      # Main list component
│   └── Todo.tsx          # Individual task component
├── contexts/
│   └── TodosContext.tsx  # Global state management
├── types/
│   └── types.ts          # TypeScript definitions
└── App.tsx               # Entry point
```

---

## 🎯 How to Use

### Add a Task
```
1. Type text in the input field
2. Press "Add" or Enter key
```

### Manage Tasks
| Action | Method |
|---------|---------|
| Complete Task | Click the ✓ checkbox next to the task |
| Edit Task | Click ✏️ icon then save |
| Delete Task | Click 🗑️ icon then confirm |

### Filtering
```
[All] ← [Active] ← [Completed]
```

---

## 🚀 Performance Improvements

- ✅ `useMemo` used for heavy calculations (filtering & stats)
- ✅ Optimized re-renders
- ✅ Clean code & maintainable structure
- ✅ Accessibility support (ARIA labels)

---

## 📸 Interface Preview

```
┌─────────────────────────────────┐
│        📝 My Daily Tasks        │
├─────────────────────────────────┤
│ [Add new task...]      [Add]    │
├─────────────────────────────────┤
│ [All(5)] [Active(3)] [Done(2)]  │
├─────────────────────────────────┤
│ ☐ Task 1                     ✏️🗑️│
│ ☑ Task 2 (Completed)         ✏️🗑️│
│ ☐ Task 3                     ✏️🗑️│
├─────────────────────────────────┤
│              [Clear Completed]  │
└─────────────────────────────────┘
```

---

## 📝 License

This project is open source and available for personal and educational use.

---

## 🤝 Contributing

Contributions are welcome! Please open an Issue or Pull Request for any improvements.

---

**Built with ❤️ using React & Material-UI**