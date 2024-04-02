import express from 'express';
import Hello from './hello';
import Lab5 from './Lab5';
import cors from 'cors'
const app = express()
Hello(app)
Lab5(app)
app.use(express.json())
app.use(cors())
app.listen(4000)