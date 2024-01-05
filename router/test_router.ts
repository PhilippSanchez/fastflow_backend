import express from 'express'
import { getTaskJson, getObjectJson, getCommentJson, getContactJson, checkUserJson } from '../controller/test_controller'


const test_router = express.Router();

test_router.use(express.json())

test_router.get("/task", getTaskJson)
test_router.get("/object", getObjectJson)
test_router.get("/comment", getCommentJson)
test_router.get("/contact", getContactJson)
test_router.post("/user", checkUserJson)

export default test_router