import { Router } from "express";
import  {getToDo, saveToDo,updateToDo,deleteToDo } from "../controllers/ToDoController.js";

const router = Router();

router.get('/',getToDo)
router.post('/save',saveToDo)
router.post('/update',updateToDo)
router.post('/delete',deleteToDo)

export default router;