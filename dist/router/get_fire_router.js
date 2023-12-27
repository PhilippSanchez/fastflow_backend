"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const get_router = express_1.default.Router();
get_router.use(express_1.default.json());
get_router.get('/tasks');
get_router.get('/objects');
get_router.get('/contact');
exports.default = get_router;
