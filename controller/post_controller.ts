import { Request, Response } from "express";
import { createNewTask } from "../service/realtimeDb_services";


export const newTask = (req: Request, res: Response) => {
    const task = createNewTask(req.body.title)
    res.json(task)
}
