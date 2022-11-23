import React, { useState } from "react";
import "./style.css";

export const AddWorkItem = ({ addNewTask }) => {
  const [message, setMessage] = useState("");

  const handleMessage = (event) => {
    setMessage(event.target.value);
  };
  const newTask = () => {
    addNewTask(message);
  };

  return (
    <div className="container">
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Add New Task"
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={handleMessage}
        />
        <button
          className="btn btn-outline-secondary"
          type="button"
          id="button-addon2"
          onClick={newTask}
        >
          Add Task
        </button>
      </div>
    </div>
  );
};
