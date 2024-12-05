//Import dotnev for environment variables
import dotenv from 'dotenv';
dotenv.config()
// import express module
import express from "express";
// import cors
import cors from "cors"

import todoRoutes from "./routes";
import pool from "./config/db";





// create an instant of express application 
const app = express();
const port = 3001;

// ---- Configuring Middleware

// Parse JSON bodies, allow us to post and get JSON
app.use(express.json());
// Middleware to parse URL-encoded bodies with extended options
app.use(express.urlencoded({ extended: true }));

//middleware to make server run at the same time with client
app.use(cors())


// ---- Defining Routes
app.use("/api", todoRoutes);

pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
});

// ---- Starting the Server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}....`);
});

