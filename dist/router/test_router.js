"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const test_controller_1 = require("../controller/test_controller");
const test_router = express_1.default.Router();
test_router.use(express_1.default.json());
test_router.get("/task", test_controller_1.getTaskJson);
test_router.get("/object", test_controller_1.getObjectJson);
test_router.get("/comment", test_controller_1.getCommentJson);
test_router.get("/contact", test_controller_1.getContactJson);
test_router.post("/user", test_controller_1.checkUserJson);
exports.default = test_router;
