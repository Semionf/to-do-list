import React, { useState } from "react";
import { AddWorkItem } from "../addWorkItem/addWorkItem.component";
import { WorkItem } from "../workItem/workItem";
import "./style.css";

export const ToDoList = (props) => {
  const [workItemsArr, setWorkItems] = useState([]);

  const addNewTask = (task) => {
    let o = { text: task, id: workItemsArr.length };
    setWorkItems((prev) => [...prev, o]);
  };

  const handleFilter = (id) => {
    console.log(id);

    setWorkItems(workItemsArr.filter((item) => item.id !== id));

    console.log(workItemsArr);
  };
  return (
    <div className="container">
      <h1>Today work items that should be done</h1>
      <AddWorkItem addNewTask={addNewTask}></AddWorkItem>
      {workItemsArr &&
        workItemsArr.map((m) => {
          return (
            <WorkItem
              id={m.id}
              key={m.id}
              message={m.text}
              handleFilter={handleFilter}
            ></WorkItem>
          );
        })}
      {workItemsArr.length === 0 ? <h1>Well Done!</h1> : <></>}
    </div>
  );
};
