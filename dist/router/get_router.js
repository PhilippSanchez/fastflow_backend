"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_controller_1 = require("../controller/get_controller");
const get_router = express_1.default.Router();
get_router.use(express_1.default.json());
get_router.get('/tasks', get_controller_1.getAllTasks);
exports.default = get_router;
