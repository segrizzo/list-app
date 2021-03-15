import logo from "./logo.svg";
import "./App.css";
import Header from "./component/Header";
import TasksList from "./component/TasksList";
import SideTaskList from "./component/SideTaskList";

function App() {
  return (
    <div className="App">
      <Header />
      <TasksList />
      <SideTaskList />
    </div>
  );
}

export default App;
