import express from "express";
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import cors from "cors";
import upload from '../MiddleWare/Uplodeimgs.js';
import fs from 'fs';
import user from "../MiddleWare/checkStudent.js";
import checkmanager from "../MiddleWare/checkManager.js";
import checkSuperAdmin from "../MiddleWare/checkSuperAdmin.js";
import checkadmin from "../MiddleWare/checkAdmin.js";
import e from "express";


const student = express();
student.use(express.Router());



student.get('/allstudentdetails',
    user,
    async (req, res) => {
        try {
            let search = "";
            if (req.query.search) {
                search = `where application.status LIKE '%${req.query.search}%'`;
            }

            // const studentdetails1 = await query(`SELECT * FROM students inner join application on students.student_id = application.student_id ${search}`);
            const studentdetails = await query(`SELECT  faculty.faculty_name ,faculty.faculty_name_ar , departments_of_faculty.department_name, departments_of_faculty.department_name_ar ,departments_of_faculty.department_name, departments_of_faculty.department_name_ar , programs_of_department.program_name , programs_of_department.program_name_ar , students.* FROM students inner join application on students.student_id = application.student_id inner join faculty on application.faculty_id = faculty.faculty_id inner join departments_of_faculty on application.department_id = departments_of_faculty.department_id inner join programs_of_department on application.program_id = programs_of_department.program_id ${search}`);

            delete studentdetails[0].password;
            res.status(200).json(studentdetails);
        } catch (err) {
            res.status(500).json({ msg: "Server Error" });
        }
    });


student.get('/studentdetails/:id',
    checkmanager,
    async (req, res) => {
        try {
            const sqlShow = "SELECT application.status,application.comment,application.comment2, application.submission_date, students.*, departments_of_faculty.department_name, departments_of_faculty.department_name_ar  FROM application INNER JOIN students ON application.student_id = students.student_id  INNER JOIN departments_of_faculty ON application.department_id = departments_of_faculty.department_id  WHERE application.student_id = ?";
            const values = [req.params.id];

            const studentdetails = await query(sqlShow, values);
            if (!studentdetails[0]) {
                return res.status(404).json({ msg: "student not found !" });
            }
            delete studentdetails[0].password;
            res.status(200).json(studentdetails[0]);
        } catch (err) {
            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }

    });
student.get('/studentdetailsAdmin/:id',
    checkadmin,
    async (req, res) => {
        try {
            const sqlShow = "SELECT application.status,application.comment, application.submission_date, students.*, faculty.faculty_name,faculty.faculty_name_ar, departments_of_faculty.department_name, departments_of_faculty.department_name_ar, programs_of_department.program_name ,programs_of_department.program_name_ar  FROM application INNER JOIN students ON application.student_id = students.student_id INNER JOIN faculty ON application.faculty_id = faculty.faculty_id INNER JOIN departments_of_faculty ON application.department_id = departments_of_faculty.department_id INNER JOIN programs_of_department ON application.program_id = programs_of_department.program_id WHERE application.student_id = ?";
            const values = [req.params.id];

            const studentdetails = await query(sqlShow, values);
            if (!studentdetails[0]) {
                return res.status(404).json({ msg: "student not found !" });
            }
            delete studentdetails[0].password;
            res.status(200).json(studentdetails[0]);
        } catch (err) {
            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }

    });

student.get('/studentdetailsReport/:id',
    checkSuperAdmin,
    async (req, res) => {
        try {
            const sqlShow = "SELECT application.status, application.submission_date, students.*, faculty.faculty_name,faculty.faculty_name_ar, departments_of_faculty.department_name, departments_of_faculty.department_name_ar, programs_of_department.program_name ,programs_of_department.program_name_ar  FROM application INNER JOIN students ON application.student_id = students.student_id INNER JOIN faculty ON application.faculty_id = faculty.faculty_id INNER JOIN departments_of_faculty ON application.department_id = departments_of_faculty.department_id INNER JOIN programs_of_department ON application.program_id = programs_of_department.program_id WHERE application.student_id = ?";
            const values = [req.params.id];

            const studentdetails = await query(sqlShow, values);
            if (!studentdetails[0]) {
                return res.status(404).json({ msg: "student not found !" });
            }
            delete studentdetails[0].password;
            res.status(200).json(studentdetails[0]);
        } catch (err) {
            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }

    });

student.get('/studentdetails',
    user,
    async (req, res) => {
        try {
            const sqlShow = "SELECT application.status, application.submission_date,application.comment, application.comment2 ,students.*, departments_of_faculty.*  FROM application INNER JOIN students ON application.student_id = students.student_id INNER JOIN departments_of_faculty ON application.department_id = departments_of_faculty.department_id  WHERE application.student_id = ?";
            const values = [req.student_id];

            const studentdetails = await query(sqlShow, values);
            if (!studentdetails[0]) {
                return res.status(404).json({ msg: "student not found !" });
            }
            delete studentdetails[0].password;
            res.status(200).json(studentdetails[0]);
        } catch (err) {
            res.status(500).json({ errors: [{ msg: "Server Error" }] });
        }

    });


student.put('/studentupdate',
    user,
    upload,
    body('name').notEmpty().withMessage('Name is required').isLength({ min: 10 }).withMessage('Name must be at least 10 chars long'),
    body('email').notEmpty().withMessage('Email is required').isEmail().withMessage('Email must be a valid email address'),
    body('phone').notEmpty().withMessage('phone is required').isInt().withMessage('phone must be a number'),
    body('national_id').notEmpty().withMessage('nationalId is required'),
    body('dateOfBirth').notEmpty().withMessage('date Of Birth is required'),
    body('gender').notEmpty().withMessage('gentder is required'),
    body('department').notEmpty().withMessage('department is required'),
    body('phoneArd').notEmpty().withMessage('phoneArde is required'),
    body('adress').notEmpty().withMessage('address is required'),
    body('nationality').notEmpty().withMessage('nationality is required'),
    body('previous_qu').notEmpty().withMessage('previous_qulification is required'),
    body('setNum').notEmpty().withMessage('set Number is required'),
    body('school').notEmpty().withMessage('High school is required'),
    body('enDeg').notEmpty().withMessage('first foreign language is required'),
    body('enDeg2').notEmpty().withMessage('second foreign language is required'),
    body('totalDeg').notEmpty().withMessage('totalDegre in high school is required'),
    body('dadJob').notEmpty().withMessage('dadJob is required'),
    body('phoneDad').notEmpty().withMessage('phoneDad is required'),
    async (req, res) => {
        try {
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                hanleDelUplodes(req);
                return res.status(400).json({ errors: errors.array() })
            }



            const sqlcheck = "SELECT * FROM students WHERE student_id = ?";
            const value = [req.student_id];
            const studentdetails = await query(sqlcheck, value);
            if (!studentdetails[0]) {
                hanleDelUplodes(req);
                return res.status(400).json({ msg: "Error: student Not Found!" });
            }

            const sqlcheck2 = "SELECT * FROM application WHERE student_id = ?";
            const value2 = [req.student_id];
            const studentdetails2 = await query(sqlcheck2, value2);
            if (studentdetails2[0].status != "3") {
                hanleDelUplodes(req);
                return res.status(400).json({ msg: "Not Allow to Update !" });
            }



            const maxFileSize = 1024 * 1024 * 2;
            const sizeinMB = maxFileSize / (1024 * 1024);
            let number_of_files = 5;

            const array_of_filename_photo = [];
            for (let i = 1; i <= number_of_files; i++) {
                if (!req.files[`image${i}`]) {
                    array_of_filename_photo.splice(i, 0);
                    continue;
                }
                let file = req.files[`image${i}`][0].size || 0;
                if (file > maxFileSize) {
                    hanleDelUplodes(req);
                    let str ;
                    if(i == 1){
                        str = "Person Photo ";
                    }else if(i == 2){
                        str = "National ID ";
                    }else if(i == 3){
                        str = "Birth Certificate ";
                    }else if(i == 4){
                        str = "Certificate of Secondary Education Qualification ";
                    }else if(i == 5){
                        str = "Please upload all the required files ";
                    }
                    return res.status(400).json({ errors: { msg: [`Please upload  ${str} Image less than ${sizeinMB} MB `] } });
                }
            }


            const studentData = {
                img: req.files[`image${1}`] ? req.files[`image${1}`][0].filename : studentdetails[0].img,
                photo_national_id: req.files[`image${2}`] ? req.files[`image${2}`][0].filename : studentdetails[0].photo_national_id,
                birth_certificate: req.files[`image${3}`] ? req.files[`image${3}`][0].filename : studentdetails[0].birth_certificate,
                academic_qualification: req.files[`image${4}`] ? req.files[`image${4}`][0].filename : studentdetails[0].academic_qualification,
                other: req.files[`image${5}`] ? req.files[`image${5}`][0].filename : studentdetails[0].other,
                student_name: req.body.name,
                national_id: req.body.national_id,
                email: req.body.email,
                phonenumber: req.body.phone,
                gender: req.body.gender,
                birthdate: req.body.dateOfBirth,
                adress: req.body.adress,
                phoneArd: req.body.phoneArd,
                phoneDad: req.body.phoneDad,
                dadJob: req.body.dadJob,
                totalDeg: req.body.totalDeg,
                enDeg: req.body.enDeg,
                enDeg2: req.body.enDeg2,
                school: req.body.school,
                setNum: req.body.setNum,
                previous_qu: req.body.previous_qu,
                nationality : req.body.nationality,
            };

            


            const sqlUpdate = "UPDATE students SET ?  WHERE student_id = ?";
            const values = [studentData, req.student_id];
            await query(sqlUpdate, values, async (err, result) => {
                if (err) {
                    hanleDelUplodes(req);
                    return res.status(400).json({ errors: [{ msg: err }] });
                } else {
                    const applicationData = {
                        department_id: req.body.department,
                        status: "1",
                    };
                    const sqlUpdate2 = "UPDATE application SET ?  WHERE student_id = ?";
                    const values2 = [applicationData, req.student_id];
                    await query(sqlUpdate2, values2);
                    res.status(200).json({ msg: "Your Data Updated Successfully" });
                }
            });






        } catch (err) {
            hanleDelUplodes(req);
            res.status(500).json({ msg: err });
        }
    });


student.delete('/studentdelete/:id',
    async (req, res) => {
        try {
            const studentdetails = await query("SELECT * FROM students WHERE student_id = ?", [req.params.id]);
            if (!studentdetails[0]) {
                return res.status(404).json({ ms: "student not found !" });
            }

            const sqlDelete = "DELETE FROM students WHERE student_id = ?";
            const values = [studentdetails[0].student_id];
            await query(sqlDelete, values);
            res.status(200).json({ msg: "student delete successfully" });
        } catch (err) {
            return res.status(500).json(err);
        }
    }
);










export default student;


function hanleDelUplodes(req) {
    let file = req.files;
    if (file) {
        for (let i = 1; i <= 10; i++) {
            if (file[`image${i}`]) {
                fs.unlinkSync(`./public/imgs/${req.national_id}/${file[`image${i}`][0].filename}`);
            }
        }
    }
}

// function hanleDelUplodesAfterUpdate(data) {
//     let file = studentdetails[0];
//     if (file) {
//         for (let i = 1; i <= 9; i++) {
//             if (`file.image${i}`) {
//                 fs.unlinkSync(`./public/imgs/${req.body.national_id}/${file[`image${i}`][0].filename}`);
//             }
//         }
//     }
// }


function hanleDelfile(req) {
    let file = req.body.national_id;
    if (file) {
        fs.rmSync(`./public/imgs/${file}`, { recursive: true, force: true });
    }
}