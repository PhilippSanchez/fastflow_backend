import express, {Express} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {app} from './app'

dotenv.config()


const port = (process.env.PORT || 8000); // Startet server auf PORT 8000

app.use(cors()) // Erlaubt Cross Origin Operationen
app.use(express.static('public')) //Erlaubt laden von statischen Bilder aus dem Public Ordner

app.listen(port, () => {
    console.log(`Server started @ Port ${port}`)
})
