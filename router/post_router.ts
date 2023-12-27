import express from 'express';
import { newTask } from '../controller/post_controller';

const post_router = express.Router();

post_router.use(express.json())


// Post a new Task to FireStore
post_router.post('/task', newTask)



export default post_router;