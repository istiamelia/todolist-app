import { Router, Request, Response } from "express";
import { QueryResult } from "pg";
import pool from "./config/db";
import { v4 as uuidv4 } from 'uuid';
import { getTasks, getTaskbyId, addTasks, deleteTask, updateTask, deleteAllTasks, updateCompleted, getCompletedTasks } from "./queries";

const router = Router();
export default router;

// Define an interface name Todo to outline the structure of the to-do item
interface Task {
    task_id: string;
    task_name: string;
    task_status: string;
}




// --- Get Request to fetch all data from the database
router.get("/todos", async (req: Request, res: Response) => {
    try {
        const result: QueryResult = await pool.query(getTasks);
        const todos: Task[] = result.rows;
        res.render('index', { todos })
    } catch (error) {
        console.error("Error fetching todos", error);
        res.status(500).json({ error: "Error fetching todos" });
    }
});

// --- Get Request to fetch all data from the database based on Id
router.get("/todos/:task_id", async (req: Request, res: Response) => {
    const task_id = req.params['task_id']
    try {
        const result: QueryResult = await pool.query(getTaskbyId(task_id));
        const todos: Task[] = result.rows;
        res.json(todos);
    } catch (error) {
        console.error("Error fetching todos", error);
        res.status(500).json({ error: "Error fetching todos" });
    }
});

// --- POST Request to retreive the data from req.body and save it to the database
router.post("/todos", async (req: Request, res: Response) => {
    const { task_name, task_status } = req.body
    const task_id = uuidv4()
    try {
        //create validation for the data type and the number of the characthers
        await pool.query(addTasks, [task_id, task_name, task_status]);
        res.redirect('/todos')
        // res.status(201).send("Task created successfully!");
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
        const result: QueryResult = await pool.query(getTaskbyId(task_id));
        if (!result.rows.length) {
            res.send("Task does not exist in the database")
        }
        await pool.query(deleteTask(task_id))
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
        const result: QueryResult = await pool.query(getTaskbyId(task_id));
        if (!result.rows.length) {
            res.send("Task does not exist in the database");
        };
        await pool.query(updateTask(task_name, task_id.toString()));
        res.status(200).send("Task updated successfully!");
    } catch (error) {
        console.error("Error updating todos", error);
        res.status(500).json({ error: "Error updating todos" });
    }
});

// --- Delete Request to Delete all task
router.delete("/todos", async (req: Request, res: Response) => {
    try {
        await pool.query(deleteAllTasks)
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
        await pool.query(updateCompleted(task_id))
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
        const resultCompleted: QueryResult = await pool.query(getCompletedTasks);
        const completedTasks: Task[] = resultCompleted.rows;
        res.render('completed', { completedTasks })
    } catch (error) {
        console.error("Error fetching todos", error);
        res.status(500).json({ error: "Error fetching todos" });
    }
});
