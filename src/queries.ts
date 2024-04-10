import { QueryConfig } from 'pg';
type SqlQuery = string;

export const getTasks: SqlQuery = "SELECT * FROM tasks WHERE completed = false";
export const getCompletedTasks: SqlQuery = "SELECT * FROM tasks WHERE completed = true";

export const getTaskbyId: (id: number) => QueryConfig<any[]> = (id) => ({
    text: "SELECT * FROM tasks WHERE id = $1",
    values: [id],
});

// pool.query in routes.ts expects an object with a text property  (the SQL query string) and a values property (an array of parameter values). so we adjust our function with 'Queryconfig' object
// $1 is the parameter that will enable us to pass variable into it


export const addTasks: SqlQuery = "INSERT INTO tasks (title, completed) VALUES ($1, $2)";

export const deleteTask: (id: number) => QueryConfig<any[]> = (id) => ({
    text: "DELETE FROM tasks WHERE id = $1",
    values: [id],
});

export const updateTask: (id: number, title: string) => QueryConfig<any[]> = (title, id) => ({
    text: "UPDATE tasks SET title = $1 WHERE id = $2",
    values: [title, id],
});

export const deleteAllTasks: SqlQuery = "DELETE FROM tasks";

// export const completedTask: (id: number) => QueryConfig<any[]> = (id) => ({
//     text: "INSERT INTO completed_tasks (id, title) SELECT id, title FROM tasks WHERE id = $1",
//     values: [id],
// });


export const updateCompleted: (id: number) => QueryConfig<any[]> = (id) => ({
    text: "UPDATE tasks SET completed = true where id = $1",
    values: [id],
});