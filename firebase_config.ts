import { initializeApp } from 'firebase/app'
import { getDatabase } from 'firebase/database'


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

const fireApp = initializeApp(firebaseConfig)
const db = getDatabase(fireApp)

export { fireApp, db }