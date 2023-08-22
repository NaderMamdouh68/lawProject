import express from "express";
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import cors from "cors";
import upload from '../MiddleWare/Uplodeimgs.js';
import fs from 'fs';
import user from "../MiddleWare/checkStudent.js";
import checkSuperAdmin from "../MiddleWare/checkSuperAdmin.js";


const SuperAdmin = express();
SuperAdmin.use(express.Router());



// SuperAdmin.get('/allaaplicationinfaculty',
//     async (req, res) => {
//         try {
//             let search = "";
//             if (req.query.search) {
//                 search = `where faculty.faculty_id LIKE '%${req.query.search}%'`;
//             }

//             const SuperAdmindetails = await query(`SELECT  faculty.faculty_name , application.status ,application.submission_date , students.* ,departments_of_faculty.department_name , programs_of_department.program_name FROM application inner join students on application.student_id = students.student_id inner join faculty on application.faculty_id = faculty.faculty_id inner join departments_of_faculty on application.department_id = departments_of_faculty.department_id inner join programs_of_department on application.program_id = programs_of_department.program_id ${search}`);

//             res.status(200).json(SuperAdmindetails);
//         } catch (err) {
//             res.status(500).json({ msg: "Server Error" });
//         }
//     });
SuperAdmin.get('/allaaplication',
    checkSuperAdmin,
    async (req, res) => {
        try {
            
            const SuperAdmindetails = await query(`SELECT  faculty.faculty_name , faculty.faculty_name_ar,application.status ,application.submission_date , students.* ,departments_of_faculty.department_name , departments_of_faculty.department_name_ar , programs_of_department.program_name ,programs_of_department.program_name_ar FROM application inner join students on application.student_id = students.student_id inner join faculty on application.faculty_id = faculty.faculty_id inner join departments_of_faculty on application.department_id = departments_of_faculty.department_id inner join programs_of_department on application.program_id = programs_of_department.program_id`);
            if(SuperAdmindetails != 0){
            delete SuperAdmindetails[0].password;
            }
            console.log(SuperAdmindetails);
            res.status(200).json(SuperAdmindetails);
        } catch (err) {
            res.status(500).json({ msg: "Server Error" });
        }
});

SuperAdmin.get('/allFaculty',
    checkSuperAdmin,
    async (req, res) => {
        try {
            const SuperAdmindetails = await query(`SELECT * FROM faculty`);
            res.status(200).json(SuperAdmindetails);
        } catch (err) {
            res.status(500).json({ msg: "Server Error" });
        }
});

SuperAdmin.get('/allmanager1',
    checkSuperAdmin,
    async (req, res) => {
        try {
            const SuperAdmindetails = await query(`SELECT faculty.faculty_name_ar , manager.* FROM manager inner join faculty on manager.faculty_id = faculty.faculty_id WHERE type = 0`);
            res.status(200).json(SuperAdmindetails);
        } catch (err) {
            res.status(500).json({ msg: "Server Error" });
        }
});

SuperAdmin.get('/allmanager2',
    checkSuperAdmin,
    async (req, res) => {
        try {
            const SuperAdmindetails = await query(`SELECT faculty.faculty_name_ar , manager.* FROM manager inner join faculty on manager.faculty_id = faculty.faculty_id WHERE type = 1`);
            res.status(200).json(SuperAdmindetails);
        } catch (err) {
            res.status(500).json({ msg: "Server Error" });
        }
});

SuperAdmin.post('/addfaculty',
    checkSuperAdmin,
    body('faculty_name').notEmpty().withMessage('faculty_name is required'),
    body('faculty_name_ar').notEmpty().withMessage('faculty_name_ar is required'),
    async (req, res) => {
        try {
            let error = [];
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                error = errors.array();
                return res.status(400).json({ errors: error });
            }
            const faculty = await query("SELECT * FROM faculty WHERE faculty_name = ? AND faculty_name_ar = ? ", [req.body.faculty_name, req.body.faculty_name_ar]);
            if (faculty.length !== 0) {
                error.push({ msg: "faculty already exists" });
                return res.status(400).json({ errors: error });
            }
            
            const facultyData = {
                faculty_name: req.body.faculty_name,
                faculty_name_ar: req.body.faculty_name_ar,
            };
            await query("INSERT INTO faculty SET ?", facultyData);
            res.status(200).json({ msg: "faculty added successfully" });
        } catch (err) {
            res.status(500).json({ msg: "Server Error" });
        }
});
SuperAdmin.post('/updatefaculty',
    checkSuperAdmin,
    body('faculty_name').notEmpty().withMessage('faculty_name is required'),
    body('faculty_name_ar').notEmpty().withMessage('faculty_name_ar is required'),
    async (req, res) => {
        try {
            let error = [];
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                error = errors.array();
                return res.status(400).json({ errors: error });
            }
            const faculty = await query("SELECT * FROM faculty WHERE faculty_name = ? AND faculty_name_ar = ? ", [req.body.faculty_name, req.body.faculty_name_ar]);
            if (faculty.length !== 0) {
                error.push({ msg: "faculty already exists" });
                return res.status(400).json({ errors: error });
            }

            const facultyData = {
                faculty_name: req.body.faculty_name,
                faculty_name_ar: req.body.faculty_name_ar,
            };

            await query("UPDATE faculty SET ? WHERE faculty_id = ?", [facultyData, req.body.faculty_id]);
            res.status(200).json({ msg: "faculty updated successfully" });
        } catch (err) {
            res.status(500).json({ msg: "Server Error" });
        }
});



SuperAdmin.post('/addmanager1',
    checkSuperAdmin,
    body('manager_name').notEmpty().withMessage('manager_name is required'),
    body('manager_email').notEmpty().withMessage('manager_email is required'),
    body('password').notEmpty().withMessage('manager_password is required'),
    body('faculty_id').notEmpty().withMessage('faculty_id is required'),
    async (req, res) => {
        try {
            let error = [];
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                error = errors.array();
                return res.status(400).json({ errors: error });
            }
            const manager = await query("SELECT * FROM manager WHERE manager_email = ? AND type = 1 ", [req.body.manager_email]);
            if (manager.length !== 0) {
                error.push({ msg: "manager already exists" });
                return res.status(400).json({ errors: error });
            }

            const managerData = {
                manager_name: req.body.manager_name,
                manager_email: req.body.manager_email,
                password: req.body.password,
                type: 1,
                faculty_id: req.body.faculty_id,
            };
            await query("INSERT INTO manager SET ?", managerData);
            res.status(200).json({ msg: "manager added successfully" });
        } catch (err) {
            res.status(500).json({ msg: "Server Error" });
        }
});

SuperAdmin.put('/updatemanager1',
    checkSuperAdmin,
    body('manager_email').notEmpty().withMessage('manager_email is required'),
    body('manager_name').notEmpty().withMessage('manager_name is required'),
    async (req, res) => {
        try {
            let error = [];
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                error = errors.array();
                return res.status(400).json({ errors: error });
            }
            const manager = await query("SELECT * FROM manager WHERE manager_email = ? AND manager_name = ? AND type = 1 ", [req.body.manager_email , req.body.manager_name]);
            if (manager.length !== 0) {
                error.push({ msg: "manager already exists" });
                return res.status(400).json({ errors: error });
            }

            const managerData = {
                manager_name: req.body.manager_name,
                manager_email: req.body.manager_email,
                type: 1,
            };
            await query("UPDATE manager SET ? WHERE manager_id = ?", [managerData, req.body.manager_id]);
            res.status(200).json({ msg: "manager updated successfully" });
        } catch (err) {
            res.status(500).json({ msg: "Server Error" });
        }
});

SuperAdmin.put('/updatemanager2',
    checkSuperAdmin,
    body('manager_email').notEmpty().withMessage('manager_email is required'),
    body('manager_name').notEmpty().withMessage('manager_name is required'),
    async (req, res) => {
        try {
            let error = [];
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                error = errors.array();
                return res.status(400).json({ errors:{msg: errors.array().map((err) => err.msg)} });
            }
            const manager = await query("SELECT * FROM manager WHERE manager_email = ? AND type = 0 AND manager_name = ? ", [req.body.manager_email , req.body.manager_name]);
            if (manager.length !== 0) {
                error.push({ msg: "manager already exists" });
                return res.status(400).json({ errors: error });
            }

            const managerData = {
                manager_name: req.body.manager_name,
                manager_email: req.body.manager_email,
                type: 0,
            };

            await query("UPDATE manager SET ? WHERE manager_id = ?", [managerData, req.body.manager_id]);
            res.status(200).json({ msg: "manager updated successfully" });
        } catch (err) {
            res.status(500).json({ msg: "Server Error" });
        }
});


SuperAdmin.post('/addmanager2',
    checkSuperAdmin,
    body('manager_name').notEmpty().withMessage('manager_name is required'),
    body('manager_email').notEmpty().withMessage('manager_email is required'),
    body('password').notEmpty().withMessage('manager_password is required'),
    body('faculty_id').notEmpty().withMessage('faculty_id is required'),
    async (req, res) => {
        try {
            let error = [];
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                error = errors.array();
                return res.status(400).json({ errors:{msg: errors.array().map((err) => err.msg)} });
            }

            const manager = await query("SELECT * FROM manager WHERE manager_email = ? AND type = 0", [req.body.manager_email]);
            if (manager.length !== 0) {
                error.push({ msg: "manager already exists" });
                return res.status(400).json({ errors: error });
            }

            const managerData = {
                manager_name: req.body.manager_name,
                manager_email: req.body.manager_email,
                password: req.body.password,
                type: 0,
                faculty_id: req.body.faculty_id,
            };
            await query("INSERT INTO manager SET ?", managerData);
            res.status(200).json({ msg: "manager added successfully" });
        } catch (err) {
            res.status(500).json({ msg: "Server Error" });
        }

});


















export default SuperAdmin;

