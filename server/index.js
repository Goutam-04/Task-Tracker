import  express  from "express";
import cors from 'cors';

import router from "./routes/ToDoRoute.js";

import Connection from "./database/db.js";


const PORT= process.env.port || 8000;

const app=express();

app.use(express.json())
app.use(cors())
Connection()
app.use(router )

app.listen(PORT,()=>{
    console.log(`your server is running on port number ${PORT}`)
})

