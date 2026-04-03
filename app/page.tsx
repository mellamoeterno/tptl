import React, { useState, useEffect } from "react";
import "./styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
function App() {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [todoEditing, setTodoEditing] = useState(null);
  const [editingText, setEditingText] = useState("");
  const [showAll, setShowAll] = useState(true);

  const [showCompleted, setShowCompleted] = useState(false);

  // load & save shit to localStorage
  useEffect(() => {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);

    if (loadedTodos) {
      setTodos(loadedTodos);
    }
  }, []);

  useEffect(() => {
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  // add Todo Submit Handler
  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false
    };

    setTodos([...todos].concat(newTodo));
    setTodo("");
  }

  // Delete todo Handler
  function deleteTodo(id) {
    const updatedTodos = [...todos].filter((todo) => todo.id !== id);

    setTodos(updatedTodos);
  }

  // Complete Checkbox
  function toggleComplete(id) {
    const updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(updatedTodos);
  }

  // Edit Todo Handler
  function editTodo(id) {
    const updateTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.text = editingText;
      }
      return todo;
    });
    setTodos(updateTodos);
    setTodoEditing(null);
    setEditingText("");
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setTodo(e.target.value)}
          value={todo}
        />
        <button type="submit">Add Todo</button>
      </form>

      <button onClick={() => setShowAll((p) => !p)}>
        {showAll ? "filter items" : "Show All"}
      </button>

      <button onClick={() => setShowCompleted((p) => !p)}>
        {showCompleted ? "Show incomplete" : "Show complete"}
      </button>

      {todos
        .filter((t) =>
          showAll ? true : showCompleted ? t.completed : !t.completed
        )
        .map((todo) => (
          <div className="todoItem" key={todo.id}>
            {todoEditing === todo.id ? (
              <input
                type="text"
                onChange={(e) => setEditingText(e.target.value)}
                value={editingText}
              />
            ) : (
              <div
                style={{
                  textDecoration: todo.completed ? "line-through" : "none"
                }}
              >
                {todo.text}{" "}
              </div>
            )}

            <input
              type="checkbox"
              onChange={() => toggleComplete(todo.id)}
              checked={todo.completed}
            />

            <button onClick={() => deleteTodo(todo.id)}>
              <FontAwesomeIcon icon={faTrash} color="black" />
            </button>

            {todoEditing === todo.id ? (
              <button onClick={() => editTodo(todo.id)}>Submit Edits</button>
            ) : (
              <button onClick={() => setTodoEditing(todo.id)}>
                <FontAwesomeIcon icon={faEdit} color="black" />
              </button>
            )}
          </div>
        ))}
    </div>
  );
}

export default App;
