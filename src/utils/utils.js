//FUNCTION TO GET TASK FROM LOCAL STORAGE
export const getTasksFromLocalStorage = () => {
  const savedTasks = localStorage.getItem("tasks");
  return savedTasks ? JSON.parse(savedTasks) : [];
  console.log(savedTasks);
};

//FUNCTION TO SAVE TASK TO LOCAL STORAGE
export const saveTasksToLocalStorage = (tasks) => {
  localStorage.setItem("tasks", JSON.stringify(tasks));
};
