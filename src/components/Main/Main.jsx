//REACT IMPORTS
import { useState, useEffect } from "react";

//UTILS IMPORTS
import {
  getTasksFromLocalStorage,
  saveTasksToLocalStorage,
} from "../../utils/utils.js";

//STYLE IMPORTS
import "./Main.css";

//COMPONENT IMPORTS
import TaskList from "../TaskList/TaskList";

function Main() {
  //INITIAL STATE FOR TASK INPUT AND TASK LIST
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(() => getTasksFromLocalStorage());
  const [filter, setFilter] = useState("all");

  //FUNCTION TO HANDLE ADDING A NEW TASK
  const handleAddTask = () => {
    if (task.trim() === "") return;

    setTasks([...tasks, { id: Date.now(), text: task, completed: false }]);
    setTask("");
  };

  //FUNCTION TO HANDLE DELETING A TASK
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //FUNCTION TO HANDLE COMPLETE/TOGGLE TASK
  const handleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  //FUNCTION TO CREATE FILTERED TASKS
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  //USE EFFECT TO SAVE TASKS TO LOCAL STORAGE WHENEVER TASKS STATE CHANGES
  useEffect(() => {
    saveTasksToLocalStorage(tasks);
    console.log(tasks);
  }, [tasks]);

  return (
    <main>
      <h2 className="main__title">Todo App</h2>
      <div className="task__input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button className="task__input-button" onClick={handleAddTask}>
          Add Task
        </button>
      </div>
      <div className="filters">
        <button onClick={() => setFilter("all")}>All</button>
        <button onClick={() => setFilter("active")}>Active</button>
        <button onClick={() => setFilter("completed")}>Completed</button>
      </div>
      <TaskList
        key={task.id}
        title="My Tasks"
        tasks={filteredTasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handleToggleTask}
      />
    </main>
  );
}

export default Main;
