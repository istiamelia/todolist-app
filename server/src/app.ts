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


//--------------- Legacy App using EJX ---------------//
// use ejs-locals for all ejs templates:
// app.engine('ejs', engine);

// Setting Up view engine template using ejs
// app.set('view engine', "ejs")

//using import.meta.ur because __dirname is no longer available by default in ES Modules
// const __filename = new URL(import.meta.url).pathname;
// const __dirname = path.dirname(__filename);

// Set the view directory
// app.set('views', path.join(__dirname, '../views'))

// Set up the views and dist directory to static
// const publicDirs = ['../views', '../dist']
// publicDirs.forEach(dir => {
//     app.use(express.static(path.join(__dirname, dir)));
// });

//--------------- Updating the current App to using React ---------------//

// ---- Defining Routes
app.use("/api", todoRoutes);

// Serve React app
// const clientBuildPath = path.join(__dirname, "../client/build");
// app.use(express.static(clientBuildPath));

// Catch-all route to serve React app for non-API requests
// app.get("*", (req, res) => {
//     res.sendFile(path.join(clientBuildPath, "index.html"));
// });



pool.on("error", (err) => {
    console.error("Unexpected error on idle client", err);
    process.exit(-1);
});

// ---- Starting the Server
app.listen(port, () => {
    console.log(`Server is listening on http://localhost:${port}....`);
});

