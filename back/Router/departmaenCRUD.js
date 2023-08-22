import express from "express";
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import cors from "cors";
import upload from '../MiddleWare/Uplodeimgs.js';
import fs from 'fs';
import user from "../MiddleWare/checkStudent.js";
import e from "cors";


const department = express();
department.use(express.Router());
department.use(cors());

department.get('/getdepartment',

    async (req, res) => {
        try {
            let search = "";
            if (req.query.search) {
                search = `where faculty.faculty_name LIKE '%${req.query.search}%'`;
            }

            const facultydetails = await query(`SELECT  * FROM departments_of_faculty ${search}`);

            res.status(200).json(facultydetails);
        } catch (err) {
            res.status(500).json({ msg: "Server Error" });
        }
}
);

export default department;
