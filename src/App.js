import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { ToDoList } from "./components/toDolist/toDoList.component";

function App() {
  return (
    <div className="App">
      <ToDoList></ToDoList>
    </div>
  );
}

export default App;
