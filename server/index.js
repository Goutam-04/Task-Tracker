import  express  from "express";
import cors from 'cors';
import bodyParser from "body-parser";

import Connection from "./database/db.js";
import Routes from './routes/route.js'

const app=express();


app.use(cors());

// app.use(bodyParser.json({extended:true}));
app.use(express.json({extended:true}));
app.use(express.urlencoded({extended:true}));
// after pargeing use routing path
app.use('/',Routes);

const port= 8000;

app.listen(port,()=>{
    console.log(`your server is running on port number ${port}`)
})

Connection()
