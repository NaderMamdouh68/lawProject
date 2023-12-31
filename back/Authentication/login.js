import express from 'express';
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import user from '../MiddleWare/checkStudent.js';


const auth = express();
auth.use(express.Router());





const key = "secretkey";



auth.post('/login',
    body('setNum').notEmpty().withMessage('setNum is required'),
    body("national_id").isLength({ min: 3 }).withMessage("national_id must be at least 3 chars long!"),
    async (req, res) => {
        try {
            let error = [];
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                error = errors.array();
                return res.status(400).json({ errors: error });
            }



            const user = await query("SELECT * FROM students WHERE setNum = ? AND national_id = ?", [req.body.setNum,req.body.national_id]);
            if (user.length === 0) {
                error.push({ msg: "Student Does Not Exist" });
                return res.status(400).json({ login: false, errors: error });
            }





            delete user[0].password;

            const payload = {
                student_id: user[0].student_id,
                national_id: user[0].national_id,
                student_name: user[0].student_name,
            };
            const token = jwt.sign(payload, key);
            req.session.token = "Bearer " + token;
            res.status(200).json({ login: true, token: token });
            // res.status(200).cookie("token",`Bearer ${token}`, { httpOnly: true }).json({ login: true });
        } catch (err) {

            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }
});

auth.get('/logout',
    user,
    async (req, res) => {
        try {
            req.session.destroy();
            res.status(200).json({ login: false, msg: "logout" });
        } catch (err) {

            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }
});

auth.post('/verify',
    body('setNum').notEmpty().withMessage('setNumer is required'),

    body('national_id').notEmpty().withMessage('national_id is required'),
    async (req, res) => {
        try {
            let error = [];
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                error = errors.array().map((err) => err.msg);
                return res.status(400).json({ errors: error });
            }

            const user = await query("SELECT * FROM students WHERE setNum = ? AND national_id = ?", [req.body.email, req.body.national_id]);
            if (user.length === 0) {
                error.push("Student Does Not Exist");
                return res.status(400).json({errors: error });
            }

            res.status(200).json({ verify: true , student_id: user[0].student_id});
        } catch (err) {

            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }
});

auth.put('/resetpassword',
    body('password').isLength({ min: 8 }).withMessage("password must be at least 8 chars long!").notEmpty().withMessage('password is required'),
    body('confirmPassword').isLength({ min: 8 }).withMessage("confirm Password must be at least 8 chars long!").notEmpty().withMessage('confirm_password is required'),
    body('student_id').notEmpty().withMessage('student_id is required'),
    async (req, res) => {
        try {
            let error = [];
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                error = errors.array().map((err) => err.msg);
                return res.status(400).json({ errors: error });
            }

            if (req.body.password !== req.body.confirmPassword) {
                error.push("password and confirm Password not match");
                return res.status(400).json({ errors: error });
            }

            const user = await query("SELECT * FROM students WHERE student_id = ?", [req.body.student_id]);
            if (user.length === 0) {
                error.push("Student Does Not Exist");
                return res.status(400).json({ errors: error });
            }

            const userdata = {
                password: await bcrypt.hash(req.body.password, 10),
            };

            await query("UPDATE students SET ? WHERE student_id = ?", [userdata, req.body.student_id]);

            res.status(200).json({ reset: true });
        } catch (err) {
            
            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }
});




auth.post('/checklogin',
    async (req, res) => {
        res.status(200).json(true);
    });

export default auth;