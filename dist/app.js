"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const get_router_1 = __importDefault(require("./router/get_router"));
const post_router_1 = __importDefault(require("./router/post_router"));
const app = (0, express_1.default)();
exports.app = app;
app.use('', get_router_1.default);
app.use('', post_router_1.default);
