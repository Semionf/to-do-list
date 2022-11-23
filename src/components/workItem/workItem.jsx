import React from "react";
import "./style.css";
import "./style.css";

export const WorkItem = ({ id, message, handleFilter }) => {
  return (
    <div className="card">
      <h5 className="card-header">Task {id + 1}</h5>
      <div className="card-body">
        <h5 className="card-title">{message}</h5>
        <button className="btn btn-primary" onClick={() => handleFilter(id)}>
          Done
        </button>
      </div>
    </div>
  );
};
