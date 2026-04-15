'use client'
import { useState } from "react";
//typescript todo with consts
type Todo = {
  id: number;
  text: string;
  completed: boolean;
};


export default function TodoApp() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState<string>("");

  // Add todo
  const handleAdd = (): void => {
    if (!input.trim()) return;

    const newTodo: Todo = {
      id: Date.now(),
      text: input,
      completed: false,
    };

    setTodos((prev) => [...prev, newTodo]);
    setInput("");
  };

  // Delete todo
  const handleDelete = (id: number): void => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  // Toggle complete
  const handleToggle = (id: number): void => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", fontFamily: "Arial" }}>
      <h2>Todo List</h2>

      {/* Input */}
      <div style={{ display: "flex", gap: "8px" }}>
        <input
          type="text"
          value={input}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setInput(e.target.value)
          }
          placeholder="Add a todo..."
          style={{ flex: 1, padding: "8px" }}
        />
        <button onClick={handleAdd}>Add</button>
      </div>

      {/* List */}
      <ul style={{ marginTop: "20px", padding: 0 }}>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
              listStyle: "none",
            }}
          >
            <span
              onClick={() => handleToggle(todo.id)}
              style={{
                cursor: "pointer",
                textDecoration: todo.completed ? "line-through" : "none",
              }}
            >
              {todo.text}
            </span>

            <button onClick={() => handleDelete(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

