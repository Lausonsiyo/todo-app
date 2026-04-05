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
import TaskList from "../TaskList/TaskLisk";

function Main() {
  //INITIAL STATE FOR TASK INPUT AND TASK LIST
  const [task, setTask] = useState(() => {
    const data = getTasksFromLocalStorage();
    console.log(data);
    return data;
  });
  const [tasks, setTasks] = useState([]);

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
  const handdleToggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task,
      ),
    );
  };

  //USE EFFECT TO SAVE TASKS TO LOCAL STORAGE WHENEVER TASKS STATE CHANGES
  useEffect(() => {
    saveTasksToLocalStorage(tasks);
    console.log(tasks);
  }, [tasks]);

  return (
    <main>
      <h1>Todo App</h1>
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
      <TaskList
        title="My Tasks"
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
        onToggleTask={handdleToggleTask}
      />
    </main>
  );
}

export default Main;
