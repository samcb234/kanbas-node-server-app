import  "dotenv/config";
import express from 'express';
import Hello from './Hello.js';
import Lab5 from './Lab5.js';
import cors from 'cors'
import mongoose from 'mongoose';
import CourseRoutes from './Kanbas/courses/routes.js';
import ModuleRoutes from './Kanbas/modules/routes.js';
import UserRoutes from './Kanbas/Users/routes.js';
import session from 'express-session';

const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'
console.log(CONNECTION_STRING)
mongoose.connect(CONNECTION_STRING);

const app = express()
app.use(cors(
    {
        credentials: true,
        origin: process.env.FRONTEND_URL
      }
     
))
const sessionOptions = {
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
      domain: process.env.HTTP_SERVER_DOMAIN,
    };
  }
  app.use(session(sessionOptions));
  
app.use(express.json())
Hello(app)
Lab5(app)
CourseRoutes(app)
ModuleRoutes(app)
UserRoutes(app)
app.listen(4000)