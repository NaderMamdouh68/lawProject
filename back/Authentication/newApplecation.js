import express from 'express';
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import cors from "cors";
import upload from '../MiddleWare/Uplodeimgs.js';
import fs from 'fs';
import user from '../MiddleWare/checkStudent.js';

const newApp = express();
newApp.use(express.Router());
newApp.use(cors());


const key = "secretkey";

newApp.post('/signup',
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
    body('enDegname').notEmpty().withMessage('first foreign language is required'),
    body('enDegname2').notEmpty().withMessage('second foreign language is required'),
    body('totalDeg').notEmpty().withMessage('totalDegre in high school is required'),
    body('dadJob').notEmpty().withMessage('dadJob is required'),
    body('phoneDad').notEmpty().withMessage('phoneDad is required'),
    async (req, res) => {
        try {
            
            

            /*==================================  check if the data is valid  ==================================*/
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                hanleDelUplodes(req);
                return res.status(400).json({ errors:{msg: errors.array().map((err) => err.msg) }});
            }
            /*=================================== CHECK OTHER UNI ============================================== */


            


            /*==================================  check if the data is valid  ==================================*/

            const sqlSelect = "SELECT * FROM students WHERE national_id = ? OR email = ?";
            const querySelect = await query(sqlSelect, [req.body.national_id, req.body.email]);
            if (querySelect.length > 0) {
                hanleDelUplodes(req);
                return res.status(400).json({ errors: { msg: ["Student already exists"] } });
            }
            

            


            /*==================================  check if upload all the required files  ==================================*/
           
            if (req.body.length_of_file != Object.keys(req.files).length || Object.keys(req.files).length == 0) {
                hanleDelUplodes(req);
                return res.status(400).json({ errors: { msg: ["Please upload all the required files"] } });
            }
            

            /*==================================  check if upload all the required files  ==================================*/


            /*==================================  check if all the files are image  ==================================*/

            for (let i = 1; i <= 4; i++) {
                
                if (!req.files[`image${i}`]) {
                    continue;
                }
                let file = req.files[`image${i}`][0].mimetype || 0;
                if (file != "image/jpeg" && file != "image/jpg" && file != "image/png" && file != "image/webp" && file != "application/pdf"){
                    hanleDelUplodes(req);
                    return res.status(400).json({ errors: { msg: ["Please upload all the required files as image"] } });
                }
            }
            /*==================================  check if all the files are image  ==================================*/

            /*==================================  check if password and checkpassword are the same  ==================================*/
            
            
            if (req.body.password !== req.body.checkpassword) {
                hanleDelUplodes(req);
                return res.status(400).json({ errors: { msg: ["Password does not match"] } });
            }
            
            
            /*==================================  check if password and checkpassword are the same  ==================================*/




            /*==================================  check if the file is image or not and check size  ==================================*/


            const maxFileSize = 1024 * 1024 * 2;
            const sizeinMB = maxFileSize / (1024 * 1024);
            let number_of_files = 2;

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
                    }
                    return res.status(400).json({ errors: { msg: [`Please upload  ${str} Image less than ${sizeinMB} MB `] } });
                }
            }
            /*==================================  check if the file is image or not and check size ==================================*/




            /*==================================  store the file name in array  ==================================*/
            for (let i = 1; i <= 4; i++) {
                if (!req.files[`image${i}`]) {
                    array_of_filename_photo.push(0);
                } else {
                    array_of_filename_photo.push(req.files[`image${i}`][0].filename);
                }
            }
            /*==================================  store the file name in array  ==================================*/
                

            /*==================================  store the student data in object  ==================================*/
            const studentData = {
                student_name: req.body.name,
                password: await bcrypt.hash(req.body.password, 10),
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
                enDegname: req.body.enDegname,
                enDegname2: req.body.enDegname2,
                school: req.body.school,
                setNum: req.body.setNum,
                previous_qu: req.body.previous_qu,
                nationality : req.body.nationality,
                img: array_of_filename_photo[0],
                photo_national_id: array_of_filename_photo[1],
                birth_certificate: array_of_filename_photo[2],
                academic_qualification: array_of_filename_photo[3],
                
                
            };
            /*==================================  store the student data in object  ==================================*/

            /*==================================  insert the student data in database  ==================================*/
            let student_id;
            const sqlInsert = "INSERT INTO `students` SET ?";
            await query(sqlInsert, studentData, (err, result) => {
                delete studentData.password;
                if (err) {
                    hanleDelUplodes(req);
                    return res.status(400).json({ errors: { msg: err } });
                } else {
                    student_id = result.insertId;
                    const applicationData = {
                        student_id: student_id,
                        department_id: req.body.department,
                        status: "2",
                        submission_date: new Date(),
                    };
                    const sqlInsert2 = "INSERT INTO `application` SET ?";
                    query(sqlInsert2, applicationData, (err, result) => {
                        if (err) {
                            hanleDelUplodes(req);
                            return res.status(400).json({ errors: { msg: err } });
                        } else {
                            return res.status(200).json({ msg: "Student added successfully", studentData });
                        }
                    });

                }
            });


            /*==================================  insert the student data in database  ==================================*/



        

        } catch (err) {
            res.status(500).json({ errors: { msg: err }, "msg": "Server Error" });
        }

    });


export default newApp;


function hanleDelUplodes(req) {
    let file = req.files;
    if (file) {
        for (let i = 1; i <= 9; i++) {
            if (file[`image${i}`]) {
                fs.unlinkSync(`./public/imgs/${req.body.national_id}/${file[`image${i}`][0].filename}`);
            }
        }
    }
}

