// export const getTasks: SqlQuery = "SELECT tasks.task_id, tasks.task_name, tasks.task_description, tasks.task_asignee, tasks.task_status, tasks.task_priority, tasks.start_date, tasks.due_date, tasks.created_at, tasks.updated_at, projects.project_name, projects.project_description FROM tasks JOIN projects ON tasks.project_id = projects.project_id WHERE task_status != 'Completed'";
export const getTasks = "SELECT projects.project_id, projects.project_name, projects.project_description, projects.created_at, tasks.task_id, tasks.task_name, tasks.task_description, tasks.task_asignee, tasks.task_status, tasks.task_priority, tasks.start_date, tasks.due_date, tasks.created_at AS task_created_at, tasks.updated_at AS task_updated_at FROM projects LEFT JOIN tasks ON projects.project_id = tasks.project_id WHERE task_status != 'Completed'";
export const getCompletedTasks = "SELECT * FROM tasks WHERE task_status = 'Completed' AND deleted_at IS NULL";
export const getTaskbyId = (task_id) => ({
    text: "SELECT projects.project_id, projects.project_name, projects.project_description, projects.created_at, tasks.task_id, tasks.task_name, tasks.task_description, tasks.task_asignee, tasks.task_status, tasks.task_priority, tasks.start_date, tasks.due_date, tasks.created_at AS task_created_at, tasks.updated_at AS task_updated_at FROM projects LEFT JOIN tasks ON projects.project_id = tasks.project_id WHERE task_id = $1",
    values: [task_id],
});
// pool.query in routes.ts expects an object with a text property  (the SQL query string) and a values property (an array of parameter values). so we adjust our function with 'Queryconfig' object
// $1 is the parameter that will enable us to pass variable into it
export const addTasks = "INSERT INTO tasks (id, task_name, task_status) VALUES ($1, $2, $3)";
export const deleteTask = (task_id) => ({
    text: "UPDATE tasks SET deleted_at = NOW() WHERE task_id = $1",
    values: [task_id],
});
export const updateTask = (task_name, task_id) => ({
    text: "UPDATE tasks SET task_name = $1 WHERE task_id = $2",
    values: [task_name, task_id],
});
export const deleteAllTasks = "UPDATE tasks SET deleted_at = NOW()";
// export const completedTask: (id: number) => QueryConfig<any[]> = (id) => ({
//     text: "INSERT INTO completed_tasks (id, title) SELECT id, title FROM tasks WHERE id = $1",
//     values: [id],
// });
export const updateCompleted = (task_id) => ({
    text: "UPDATE tasks SET task_status = 'Completed' where task_id = $1",
    values: [task_id],
});
