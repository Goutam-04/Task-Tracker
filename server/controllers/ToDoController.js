import { ToDo } from "../models/ToDoModel.js";

const getToDo = async (req, res) => {
  const toDo = await ToDo.find();
  res.send(toDo);
};

const saveToDo = async (req, res) => {
  const { text } = req.body;

  ToDo.create({ text }).then((data) => {
    console.log("added successfully...");
    console.log(data);
    res.send(data);
  });
};

const updateToDo = async (req,res) =>{
    const {_id,text}= req.body
    ToDo.findByIdAndUpdate(_id,{text})
    .then(()=>res.send("updated successfully..."))
    .catch((err) => console.log(err))
};


const deleteToDo = async (req,res) =>{
    const {_id,text}= req.body
    ToDo.findByIdAndDelete(_id,{text})
    .then(()=>res.send("deleted successfully..."))
    .catch((err) => console.log(err))
};

export { getToDo, saveToDo, updateToDo, deleteToDo };
