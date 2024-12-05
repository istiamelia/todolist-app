import { Router, Request, Response } from "express";
import { QueryResult } from "pg";
import pool from "./config/db";
import { v4 as uuidv4 } from 'uuid';
// import { getTasks, getTaskbyId, addTasks, deleteTask, updateTask, deleteAllTasks, updateCompleted, getCompletedTasks, getProjects } from "./queries";
// Simplify the import keyword of variables in queries.ts by grouping them into one object
import * as taskQueries from "./queries";

const router = Router();
export default router;

// Define an interface name Todo to outline the structure of the to-do item
interface Task {
    task_id: string;
    task_name: string;
    task_description: string;
    task_asignee: string;
    task_status: string;
    task_priority: string;
    start_date: Date;
    due_date: Date;
    deleted_date: Date;
    created_date: Date;
    updated_date: Date;
    project_id: number;
    project_name: string;
    project_description: string;
    created_at: Date;
}
interface Project {
    project_id: number;
    project_name: string;
    project_description: string;
    created_at: Date;
}

// --- Get Request to fetch all data from the database
router.get("/todos", async (req: Request, res: Response) => {
    try {
        const result: QueryResult = await pool.query(taskQueries.getTasks);
        const result2: QueryResult = await pool.query(taskQueries.getProjects);
        const tasks: Task[] = result.rows;
        const projects: Project[] = result2.rows;
        console.log("Tasks:", tasks);
        console.log("Projects:", projects);
        res.send({tasks, projects })
    } catch (error) {
        console.error("Error fetching todos", error);
        res.status(500).json({ error: "Error fetching todos" });
    }
});

// --- Get Request to fetch all data from the database based on Id
router.get("/todos/:task_id", async (req: Request, res: Response) => {
    const task_id = req.params['task_id']
    try {
        const result: QueryResult = await pool.query(taskQueries.getTaskbyId(task_id));
        const todos: Task[] = result.rows;
        res.json(todos);
    } catch (error) {
        console.error("Error fetching todos", error);
        res.status(500).json({ error: "Error fetching todos" });
    }
});

// --- POST Request to retreive the data from req.body and save it to the database
router.post("/todos", async (req: Request, res: Response) => {
    const { task_name, task_description, task_asignee, task_status, task_priority, project_id, start_date, due_date } = req.body;
    const task_id = uuidv4()
    try {
        //create validation for the data type and the number of the characthers
        await pool.query(taskQueries.addTasks, [task_id, task_name, task_description, task_asignee, task_status, task_priority, project_id, start_date, due_date]);
        res.json([task_id, task_name, task_description, task_asignee, task_status, task_priority, project_id, start_date, due_date]);
        // res.redirect('/todos')
    } catch (error) {
        console.error("Error saving todos", error);
        res.status(500).json({ error: "Error saving todos" });
    }
});

// --- Delete Request to delete particular task from the database
router.delete("/todos/:task_id", async (req: Request, res: Response) => {
    const task_id = req.params['task_id']
    try {
        // first, checking wether the task exist in the database
        const result: QueryResult = await pool.query(taskQueries.getTaskbyId(task_id));
        if (!result.rows.length) {
            res.send("Task does not exist in the database")
        }
        await pool.query(taskQueries.deleteTask(task_id))
        res.redirect('/todos')
    } catch (error) {
        console.error("Error deleting todos", error);
        res.status(500).json({ error: "Error deleting todos" });
    }
});

// --- Put Request to Update a particular task
// --- Still considering whether this feature to update a particular task is necessary
router.put("/todos/:task_id", async (req: Request, res: Response) => {
    const task_id = req.params['task_id']
    const { task_name } = req.body;
    try {
        // first, checking wether the task exist in the database
        const result: QueryResult = await pool.query(taskQueries.getTaskbyId(task_id));
        if (!result.rows.length) {
            res.send("Task does not exist in the database");
        };
        await pool.query(taskQueries.updateTask(task_name, task_id.toString()));
        res.status(200).send("Task updated successfully!");
    } catch (error) {
        console.error("Error updating todos", error);
        res.status(500).json({ error: "Error updating todos" });
    }
});

// --- Delete Request to Delete all task
router.delete("/todos", async (req: Request, res: Response) => {
    try {
        await pool.query(taskQueries.deleteAllTasks)
        res.redirect('/todos')
    } catch (error) {
        console.error("Error deleting todos", error);
        res.status(500).json({ error: "Error deleting todos" });
    }
});


// --- Post request to update task_status into completed
router.post("/todos/:task_id", async (req: Request, res: Response) => {
    const task_id = req.params['task_id']
    try {
        await pool.query(taskQueries.updateCompleted(task_id))
        res.redirect('/todos')
    } catch (error) {
        console.error("Error deleting todos", error);
        res.status(500).json({ error: "Error deleting todos" });
    }
});


// --- Since the interface to show the completed tasks is intended to be dynamic, which can be fetch alongside the main tasks in the same page
// --- this get request is to create a path to fetch the data from completed_tasks table and then rendered into completed.ejs
// --- after being rendered the content in completed.ejs will be injected into DOM via loadpartial() *see index.ts
router.get('/path/to/completed', async (req: Request, res: Response) => {
    try {
        const resultCompleted: QueryResult = await pool.query(taskQueries.getCompletedTasks);
        const completedTasks: Task[] = resultCompleted.rows;
        res.render('completed', { completedTasks })
    } catch (error) {
        console.error("Error fetching todos", error);
        res.status(500).json({ error: "Error fetching todos" });
    }
});

