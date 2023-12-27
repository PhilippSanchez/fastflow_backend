import { fireApp, db } from '../firebase_config'
import { getDatabase,
         ref,
         get,
         set, 
         child} from 'firebase/database'


export function createNewTask(title: string) {
    set(ref(db, 'test/'), {
        title: "Test Bestanden"
    })
    return "New Task was Set"
}


export function allFbTasks () {
    const dbRef = ref(db)
    try{
        get(child(dbRef, 'tasks')).then((snapshot) => {
            if(snapshot.exists()) {
                const val = snapshot.val()
                return val
            }
            else {
                console.log("No data found")
            }
        })
    }
    catch(error) {
        console.log("An error Occured: ", error)
    }
}
