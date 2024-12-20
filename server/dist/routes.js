var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { Router } from "express";
import pool from "./config/db";
import { v4 as uuidv4 } from 'uuid';
// import { getTasks, getTaskbyId, addTasks, deleteTask, updateTask, deleteAllTasks, updateCompleted, getCompletedTasks, getProjects } from "./queries";
// Simplify the import keyword of variables in queries.ts by grouping them into one object
import * as taskQueries from "./queries";
const router = Router();
export default router;
// --- Get Request to fetch all data from the database
router.get("/todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query(taskQueries.getTasks);
        const result2 = yield pool.query(taskQueries.getProjects);
        const tasks = result.rows;
        const projects = result2.rows;
        console.log("Tasks:", tasks);
        console.log("Projects:", projects);
        res.send({ tasks, projects });
    }
    catch (error) {
        console.error("Error fetching todos", error);
        res.status(500).json({ error: "Error fetching todos" });
    }
}));
// --- Get Request to fetch all data from the database based on Id
router.get("/todos/:task_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task_id = req.params['task_id'];
    try {
        const result = yield pool.query(taskQueries.getTaskbyId(task_id));
        const todos = result.rows;
        res.json(todos);
    }
    catch (error) {
        console.error("Error fetching todos", error);
        res.status(500).json({ error: "Error fetching todos" });
    }
}));
// --- POST Request to retreive the data from req.body and save it to the database
router.post("/todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { task_name, task_description, task_asignee, task_status, task_priority, project_id, start_date, due_date } = req.body;
    const task_id = uuidv4();
    try {
        //create validation for the data type and the number of the characthers
        yield pool.query(taskQueries.addTasks, [task_id, task_name, task_description, task_asignee, task_status, task_priority, project_id, start_date, due_date]);
        res.redirect('/todos');
    }
    catch (error) {
        console.error("Error saving todos", error);
        res.status(500).json({ error: "Error saving todos" });
    }
}));
// --- Delete Request to delete particular task from the database
router.delete("/todos/:task_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task_id = req.params['task_id'];
    try {
        // first, checking wether the task exist in the database
        const result = yield pool.query(taskQueries.getTaskbyId(task_id));
        if (!result.rows.length) {
            res.send("Task does not exist in the database");
        }
        yield pool.query(taskQueries.deleteTask(task_id));
        res.redirect('/todos');
    }
    catch (error) {
        console.error("Error deleting todos", error);
        res.status(500).json({ error: "Error deleting todos" });
    }
}));
// --- Put Request to Update a particular task
// --- Still considering whether this feature to update a particular task is necessary
router.put("/todos/:task_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task_id = req.params['task_id'];
    const { task_name } = req.body;
    try {
        // first, checking wether the task exist in the database
        const result = yield pool.query(taskQueries.getTaskbyId(task_id));
        if (!result.rows.length) {
            res.send("Task does not exist in the database");
        }
        ;
        yield pool.query(taskQueries.updateTask(task_name, task_id.toString()));
        res.status(200).send("Task updated successfully!");
    }
    catch (error) {
        console.error("Error updating todos", error);
        res.status(500).json({ error: "Error updating todos" });
    }
}));
// --- Delete Request to Delete all task
router.delete("/todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield pool.query(taskQueries.deleteAllTasks);
        res.redirect('/todos');
    }
    catch (error) {
        console.error("Error deleting todos", error);
        res.status(500).json({ error: "Error deleting todos" });
    }
}));
// --- Post request to update task_status into completed
router.post("/todos/:task_id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const task_id = req.params['task_id'];
    try {
        yield pool.query(taskQueries.updateCompleted(task_id));
        res.redirect('/todos');
    }
    catch (error) {
        console.error("Error deleting todos", error);
        res.status(500).json({ error: "Error deleting todos" });
    }
}));
// --- Since the interface to show the completed tasks is intended to be dynamic, which can be fetch alongside the main tasks in the same page
// --- this get request is to create a path to fetch the data from completed_tasks table and then rendered into completed.ejs
// --- after being rendered the content in completed.ejs will be injected into DOM via loadpartial() *see index.ts
router.get('/path/to/completed', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const resultCompleted = yield pool.query(taskQueries.getCompletedTasks);
        const completedTasks = resultCompleted.rows;
        res.render('completed', { completedTasks });
    }
    catch (error) {
        console.error("Error fetching todos", error);
        res.status(500).json({ error: "Error fetching todos" });
    }
}));
