"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newTask = void 0;
const realtimeDb_services_1 = require("../service/realtimeDb_services");
const newTask = (req, res) => {
    const task = (0, realtimeDb_services_1.createNewTask)(req.body.title);
    res.json(task);
};
exports.newTask = newTask;
