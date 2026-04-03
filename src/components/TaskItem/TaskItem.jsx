function TaskItem({ task, onDeleteTask, onToggleTask }) {
  return (
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
  );
}

export default TaskItem;
