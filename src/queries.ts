import { QueryConfig } from 'pg';
type SqlQuery = string;

export const getTasks: SqlQuery = "SELECT * FROM tasks WHERE task_status != Completed AND deleted_at IS NULL";
export const getCompletedTasks: SqlQuery = "SELECT * FROM tasks WHERE task_status = Completed AND deleted_at IS NULL";

export const getTaskbyId: (id: string) => QueryConfig<any[]> = (id) => ({
    text: "SELECT * FROM tasks WHERE id = $1",
    values: [id],
});

// pool.query in routes.ts expects an object with a text property  (the SQL query string) and a values property (an array of parameter values). so we adjust our function with 'Queryconfig' object
// $1 is the parameter that will enable us to pass variable into it


export const addTasks: SqlQuery = "INSERT INTO tasks (id, task_name, task_status) VALUES ($1, $2, $3)";

export const deleteTask: (id: string) => QueryConfig<any[]> = (id) => ({
    text: "UPDATE tasks SET deleted_at = NOW() WHERE id = $1",
    values: [id],
});

export const updateTask: (id: string, task_name: string) => QueryConfig<any[]> = (task_name, id) => ({
    text: "UPDATE tasks SET task_name = $1 WHERE id = $2",
    values: [task_name, id],
});

export const deleteAllTasks: SqlQuery = "UPDATE tasks SET deleted_at = NOW()";

// export const completedTask: (id: number) => QueryConfig<any[]> = (id) => ({
//     text: "INSERT INTO completed_tasks (id, title) SELECT id, title FROM tasks WHERE id = $1",
//     values: [id],
// });


export const updateCompleted: (id: string) => QueryConfig<any[]> = (id) => ({
    text: "UPDATE tasks SET task_status = Completed where id = $1",
    values: [id],
});