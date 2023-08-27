import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import checkpages from './MiddleWare/checkpages.js';
import newApp from './Authentication/newApplecation.js';
import student from './Router/studentCURD.js';
import manager from './Router/managerCRUD.js';
import auth from './Authentication/login.js';
import authmanager from './Authentication/loginManager.js';
import faculty from './Router/facultyCRUD.js';
import department from './Router/departmaenCRUD.js';
import program from './Router/program.js';
import authadmin from './Authentication/loginِAdmin.js';
import path from 'path';
import { fileURLToPath } from 'url';
import loginsuperAdmin from './Authentication/loginSuperAdmin.js';
import SuperAdmin from './Router/superAdminCRUD.js';
import admin from './Router/adminCRUD.js';

const __filename = fileURLToPath(import.meta.url)
let __dirname = path.dirname(__filename)
__dirname = __dirname.substring(0, __dirname.lastIndexOf("\\"))



const app = express();
app.use(cors({
    origin: ['http://localhost:3000'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    maxAge: 1 * 24 * 60 * 60 * 1000,
    optionsSuccessStatus: 200
}));

app.use(session({
    secret: 'secret',
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
    }
}));



app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public/imgs'));


app.use('/checkpages', checkpages);

app.use('/newapp', newApp);
app.use('', auth);
app.use('/managerlog', authmanager);
app.use('/adminlog', authadmin);
app.use('/superadminlog', loginsuperAdmin);



app.use('/student',student);
app.use('/manager',manager);
app.use('/superadmin',SuperAdmin);
app.use('/admin',admin);


app.use('',faculty);
app.use('',department);
app.use('',program);
app.use(express.static(path.join(__dirname, 'front', "build")))
app.get('*',async (req,res) => {
        res.sendFile(path.join(__dirname, 'front',"build", "index.html"))
    })

dotenv.config({ path: './.env' });
const PORT = process.env.PORT || 5002;


app.listen(PORT, () => {
    console.log("Server is running on port 5002");
})