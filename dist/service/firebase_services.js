"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createNewTask = void 0;
const app_1 = require("firebase/app");
const database_1 = require("firebase/database");
const firebaseConfig = {
    apiKey: "AIzaSyBbHN6Tz0VwcDY0A9eAMTpoHLgNB3-WOtY",
    authDomain: "fastflow-596dc.firebaseapp.com",
    databaseURL: "https://fastflow-596dc-default-rtdb.firebaseio.com",
    projectId: "fastflow-596dc",
    storageBucket: "fastflow-596dc.appspot.com",
    messagingSenderId: "279282913160",
    appId: "1:279282913160:web:b03bb91dd7db69093bb43d",
    measurementId: "G-WJX18D6G95"
};
const fireApp = (0, app_1.initializeApp)(firebaseConfig);
const db = (0, database_1.getDatabase)(fireApp);
function createNewTask(title) {
    (0, database_1.set)((0, database_1.ref)(db, 'test/'), {
        title: "Test Bestanden"
    });
    return "New Task was Set";
}
exports.createNewTask = createNewTask;
