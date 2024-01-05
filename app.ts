import express, { Express } from 'express'
import get_router from './router/get_router';
import post_router from './router/post_router';
import test_router from './router/test_router';
import cors from 'cors'

const app: Express = express();

/* app.use('', get_router)

app.use('', post_router) */

app.use('', cors(), test_router)

export { app };