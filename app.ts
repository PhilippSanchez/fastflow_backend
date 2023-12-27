import express, { Express } from 'express'
import get_router from './router/get_router';
import post_router from './router/post_router';

const app: Express = express();

app.use('', get_router)

app.use('', post_router)

export { app };