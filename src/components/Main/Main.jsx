//REACT IMPORTS
import { useState } from "react";

//STYLE IMPORTS
import "./Main.css";
import TaskList from "../TaskList/TaskLisk";

function Main() {
  //INITIAL STATE FOR TASK INPUT AND TASK LIST
  const [task, setTask] = useState("");
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

  return (
    <main>
      <h1>Todo App</h1>
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Add a new task..."
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <TaskList
        title="My Tasks"
        tasks={tasks}
        onDeleteTask={handleDeleteTask}
      />
    </main>
  );
}

export default Main;
