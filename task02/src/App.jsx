import { useState } from "react";
import "./App.css";

function App() {
  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  const handleAdd = () => {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false,
    };

    setTodos([...todos, newTodo]);
    setTask("");
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="app">
      <div className="card">
        <h1>TO DO LIST</h1>

        <div className="input-section">
          <input
            type="text"
            placeholder="Enter the task..."
            value={task}
            onChange={(e) => setTask(e.target.value)}
          />
          <button onClick={handleAdd}>Add</button>
        </div>

        <ul>
          {todos.map((todo) => (
            <li
              key={todo.id}
              className={todo.completed ? "completed" : ""}
            >
              {todo.text}

              <div className="btn-group">
                <button onClick={() => handleToggle(todo.id)}>
                  {todo.completed ? "Undo" : "Done"}
                </button>

                <button
                  className="delete"
                  onClick={() => handleDelete(todo.id)}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;