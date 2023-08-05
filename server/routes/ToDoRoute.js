import { Router } from "express";
import  {getToDo, saveToDo,updateToDo,deleteToDo } from "../controllers/ToDoController.js";

const router = Router();

router.get('/api',getToDo)
router.post('/api/save',saveToDo)
router.post('/api/update',updateToDo)
router.post('/api/delete',deleteToDo)

export default router;