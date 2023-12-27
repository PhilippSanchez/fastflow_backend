"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const post_controller_1 = require("../controller/post_controller");
const post_router = express_1.default.Router();
post_router.use(express_1.default.json());
post_router.post('/task', post_controller_1.newTask);
