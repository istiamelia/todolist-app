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
import pool from "./db";
import { getTasks, getTaskbyId, addTasks, deleteTask, updateTask, deleteAllTasks, completedTask, getCompletedTasks } from "./queries";
const router = Router();
export default router;
// --- Get Request to fetch all data from the database
router.get("/todos", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const result = yield pool.query(getTasks);
        const todos = result.rows;
        res.render('index', { todos });
    }
    catch (error) {
        console.error("Error fetching todos", error);
        res.status(500).json({ error: "Error fetching todos" });
    }
}));
// --- Get Request to fetch all data from the database based on Id
router.get("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        const result = yield pool.query(getTaskbyId(id));
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
    const { title, completed } = req.body;
    try {
        yield pool.query(addTasks, [title, completed]);
        res.redirect('/todos');
        // res.status(201).send("Task created successfully!");
    }
    catch (error) {
        console.error("Error saving todos", error);
        res.status(500).json({ error: "Error saving todos" });
    }
}));
// --- Delete Request to delete particular task from the database
router.delete("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        // first, checking wether the task exist in the database
        const result = yield pool.query(getTaskbyId(id));
        if (!result.rows.length) {
            res.send("Task does not exist in the database");
        }
        yield pool.query(deleteTask(id));
        res.redirect('/todos');
    }
    catch (error) {
        console.error("Error deleting todos", error);
        res.status(500).json({ error: "Error deleting todos" });
    }
}));
// --- Put Request to Update a particular task
// --- Still considering whether this feature to update a particular task is necessary
router.put("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    const { title } = req.body;
    try {
        // first, checking wether the task exist in the database
        const result = yield pool.query(getTaskbyId(id));
        if (!result.rows.length) {
            res.send("Task does not exist in the database");
        }
        ;
        yield pool.query(updateTask(title, id.toString()));
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
        yield pool.query(deleteAllTasks);
        res.redirect('/todos');
    }
    catch (error) {
        console.error("Error deleting todos", error);
        res.status(500).json({ error: "Error deleting todos" });
    }
}));
// --- Post request to insert a particular task from the tasks table to completed_tasks table
// --- And the task will also be deleted from tasks table
router.post("/todos/:id", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = parseInt(req.params.id);
    try {
        yield pool.query(completedTask(id));
        yield pool.query(deleteTask(id));
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
        const resultCompleted = yield pool.query(getCompletedTasks);
        const completedTasks = resultCompleted.rows;
        res.render('completed', { completedTasks });
    }
    catch (error) {
        console.error("Error fetching todos", error);
        res.status(500).json({ error: "Error fetching todos" });
    }
}));
