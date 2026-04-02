//STYLE IMPORTS
import "./TaskList.css";

function TaskList({ title, tasks, onDeleteTask, onToggleTask }) {
  return (
    <div className="task__list">
      <h2 className="task__list-title">{title}</h2>
      <ul className="task__list-items">
        {tasks.map((task) => (
          <li key={task.id} className="task__list-item">
            <p
              className={`task__title ${task.completed ? "task__title-completed" : ""}`}
              onClick={() => onToggleTask(task.id)}
            >
              {" "}
              {task.text}
            </p>
            <button
              className="task__list-deleteButton"
              onClick={() => onDeleteTask(task.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
