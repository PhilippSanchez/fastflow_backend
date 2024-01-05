"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkUserJson = exports.getContactJson = exports.getCommentJson = exports.getObjectJson = exports.getTaskJson = void 0;
const task_json_1 = __importDefault(require("../public/testdb/task.json"));
const getTaskJson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let tasks = [];
    for (let i = 0; i < task_json_1.default.length; i++) {
        tasks.push(task_json_1.default[i]);
    }
    res.json(tasks);
});
exports.getTaskJson = getTaskJson;
const getObjectJson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Object");
});
exports.getObjectJson = getObjectJson;
const getCommentJson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Comment");
});
exports.getCommentJson = getCommentJson;
const getContactJson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("Contact");
});
exports.getContactJson = getContactJson;
const checkUserJson = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send("User");
});
exports.checkUserJson = checkUserJson;
