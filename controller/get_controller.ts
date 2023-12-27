import { Request, Response } from "express";
import { allFbTasks } from "../service/realtimeDb_services";

export const getAllTasks = async (req: Request, res: Response) => {
      const allTasks = allFbTasks();
      console.log(JSON.stringify(allTasks))
}
