import express from 'express';
const app  = express();
const PORT = 6969;
import router from './routes/routes.js';
import cors from "cors";
import DBConnection from './database/db.js';

app.use(cors());

app.use('/',router)


DBConnection()
app.listen(6969,()=>{
    console.log(`Server is live at ${PORT}`)
})
