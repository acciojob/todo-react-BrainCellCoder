import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./../styles/App.css";

const App = () => {
  const [list, setList] = useState([]);
  const [task, setTask] = useState("");

  const handleInput = (e) => {
    const task = {
      name: e.target.value,
      id: uuidv4(),
    };
    setTask(task);
  };
  const handleDelete = (id) => {
    const newlist = list.filter((item) => item.id !== id);
    setList(newlist);
  };
  return (
    <div>
      <h1>Todo List</h1>
      <input onChange={handleInput} value={task} />
      <button
        onClick={() => {
          setList([...list, task]);
          setTask("");
        }}
      >
        Add Todo
      </button>

      <ul>
        {list.map((item) => {
          return (
            <li key={item.id}>
              {item.name}
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default App;
