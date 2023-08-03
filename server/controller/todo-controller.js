import todo from "../model/Todo.js"

 const addTodo = async (request, response) => {
  try{

      const newTodo = await todo.create({
          data:request.body.data,
          createdAt:Date.now()
        })
        
        await newTodo.save();
        
        response.status(200).json(newTodo);
    }catch(error){
        return response.status(500).json(error.message);
    }
}

export default addTodo;