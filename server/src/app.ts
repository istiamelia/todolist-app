// import express module
import express from "express";
//Import dotnev for environment variables
import dotenv from 'dotenv';
dotenv.config()
// import cors
import cors from "cors"
import path from "path";
// @ts-ignore
import engine from "ejs-mate";
import todoRoutes from "./routes";
import pool from "./config/db";
//defining method-override to manipulate the HTTP methods
import methodOverride from 'method-override';




// create an instant of express application 
const app = express();
const port = 3001;

// ---- Configuring Middleware

// Parse JSON bodies, allow us to post and get JSON
app.use(express.json());

//middleware to make server run at the same time with client
app.use(cors())

// Middleware to parse URL-encoded bodies with extended options
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));



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

