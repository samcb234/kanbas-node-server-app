import express from 'express';
import Hello from './hello';
import Lab5 from './Lab5';
import cors from 'cors'
import CourseRoutes from './Kanbas/courses/routes';
import ModuleRoutes from './Kanbas/modules/routes';
const app = express()
Hello(app)
Lab5(app)
CourseRoutes(app)
ModuleRoutes(app)
app.use(express.json())
app.use(cors())
app.listen(4000)