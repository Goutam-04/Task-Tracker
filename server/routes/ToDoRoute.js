import { Router } from "express";
import  {getToDo, saveToDo } from "../controllers/ToDoController.js";

const router = Router();

router.get('/',getToDo)
router.post('/save',saveToDo)

export default router;