import ToDo from "../models/ToDoModel.js";

const getToDo=async(req,res)=>{
    const toDo = await ToDo.find();
    res.send(toDo)
}

const saveToDo = async(res,req) =>{
    const{text} = req.body

    ToDo.create({text}).then((data)=>{
        console.log("added successfully...");
        console.log(data);
        res.send(data);
    })
}

export { getToDo, saveToDo };