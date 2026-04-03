//STYLE IMPORTS
import "./TaskList.css";

//COMPONENT IMPORTS
import TaskItem from "../TaskItem/TaskItem";

function TaskList({ title, tasks, onDeleteTask, onToggleTask }) {
  return (
    <div className="task__list">
      <h2 className="task__list-title">{title}</h2>
      <ul className="task__list-items">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDeleteTask={onDeleteTask}
            onToggleTask={onToggleTask}
          />
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
