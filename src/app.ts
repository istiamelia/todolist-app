// import express module
import express from "express";
import path from "path";
// @ts-ignore
import engine from "ejs-mate";
import todoRoutes from "./routes";
import pool from "./db";
//defining method-override to manipulate the HTTP methods
import methodOverride from 'method-override';

// create an instant of express application 
const app = express();
const port = 3000;

// ---- Configuring Middleware

// Parse JSON bodies, allow us to post and get JSON
app.use(express.json());

// Parse URL-encoded bodies with extended options
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));

// use ejs-locals for all ejs templates:
app.engine('ejs', engine);

// Setting Up view engine template using ejs
app.set('view engine', "ejs")

//using import.meta.ur because __dirname is no longer available by default in ES Modules
const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

// Set the view directory
app.set('views', path.join(__dirname, '../views'))

// Set up the views and dist directory to static
const publicDirs = ['../views', '../dist']
publicDirs.forEach(dir => {
    app.use(express.static(path.join(__dirname, dir)));
});

// ---- Defining Routes
app.use("/", todoRoutes);

pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
});

// ---- Starting the Server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}....`);
});

