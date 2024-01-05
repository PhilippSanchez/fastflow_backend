import { Request, Response } from 'express'
import Comment from '../public/testdb/comment.json'
import Contact from '../public/testdb/contact.json'
import Object from '../public/testdb/object.json'
import Task from '../public/testdb/task.json'
import User from '../public/testdb/task.json'


export const getTaskJson  = async (req: Request, res: Response) => {
    let tasks  = []
    for(let i = 0; i < Task.length; i++) {
        tasks.push(Task[i])
    }
    res.json(tasks);
}

export const getObjectJson  = async (req: Request, res: Response)=> {
    res.send("Object")
}

export const getCommentJson  = async (req: Request, res: Response) => {
    res.send("Comment")
}

export const getContactJson  = async (req: Request, res: Response) => {
    res.send("Contact")
}

export const checkUserJson  = async (req: Request, res: Response) => {
    res.send("User")
}