import express from 'express';
import { getAllTasks } from '../controller/get_controller';

const get_router = express.Router();

get_router.use(express.json())

get_router.get('/tasks', getAllTasks)

export default get_router