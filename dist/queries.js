export const getTasks = "SELECT * FROM tasks";
export const getCompletedTasks = "SELECT * FROM completed_tasks";
export const getTaskbyId = (id) => ({
    text: "SELECT * FROM tasks WHERE id = $1",
    values: [id],
});
// pool.query in routes.ts expects an object with a text property  (the SQL query string) and a values property (an array of parameter values). so we adjust our function with 'Queryconfig' object
// $1 is the parameter that will enable us to pass variable into it
export const addTasks = "INSERT INTO tasks (title, completed) VALUES ($1, $2)";
export const deleteTask = (id) => ({
    text: "DELETE FROM tasks WHERE id = $1",
    values: [id],
});
export const updateTask = (title, id) => ({
    text: "UPDATE tasks SET title = $1 WHERE id = $2",
    values: [title, id],
});
export const deleteAllTasks = "DELETE FROM tasks";
export const completedTask = (id) => ({
    text: "INSERT INTO completed_tasks (id, title) SELECT id, title FROM tasks WHERE id = $1",
    values: [id],
});
