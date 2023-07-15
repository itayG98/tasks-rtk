import "./App.css";
import AddTask from "./components/AddTask";
import TaskList from "./components/TaskList";

function App() {
  return (
    <div className="App">
      <h1>My Tasks Application</h1>
      <TaskList></TaskList>
      <AddTask></AddTask>
    </div>
  );
}

export default App;
