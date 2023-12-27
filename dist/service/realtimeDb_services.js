"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.allFbTasks = exports.createNewTask = void 0;
const firebase_config_1 = require("../firebase_config");
const database_1 = require("firebase/database");
function createNewTask(title) {
    (0, database_1.set)((0, database_1.ref)(firebase_config_1.db, 'test/'), {
        title: "Test Bestanden"
    });
    return "New Task was Set";
}
exports.createNewTask = createNewTask;
function allFbTasks() {
    const dbRef = (0, database_1.ref)(firebase_config_1.db);
    try {
        (0, database_1.get)((0, database_1.child)(dbRef, 'tasks')).then((snapshot) => {
            if (snapshot.exists()) {
                const val = snapshot.val();
                return val;
            }
            else {
                console.log("No data found");
            }
        });
    }
    catch (error) {
        console.log("An error Occured: ", error);
    }
}
exports.allFbTasks = allFbTasks;
