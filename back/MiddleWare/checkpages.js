import express from 'express';
import query from '../Database/DBConnection.js';
import { body, validationResult } from "express-validator";
import cors from "cors";
import upload from './Uplodeimgs.js';
import multer from 'multer';


const checkpages = express();
checkpages.use(express.Router());
checkpages.use(cors());


checkpages.post('/checkpage1',
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
    body('enDeg').notEmpty().withMessage('Degree first foreign language is required'),
    body('enDegname').notEmpty().withMessage('first foreign language is required'),
    body('enDegname2').notEmpty().withMessage('second foreign language is required'),
    body('enDeg2').notEmpty().withMessage('Degree second foreign language is required'),
    body('totalDeg').notEmpty().withMessage('totalDegre in high school is required'),
    body('dadJob').notEmpty().withMessage('dadJob is required'),
    body('phoneDad').notEmpty().withMessage('phoneDad is required'),
    
    async (req, res) => {
        try {

            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ errors: { msg: errors.array().map((err) => err.msg) } });
            }

            

            const sqlSelect = "SELECT * FROM students WHERE national_id = ? OR setNum = ?";
            await query(sqlSelect, [req.body.national_id , req.body.setNum], async (err, result) => {
                if (err) {
                    return res.status(400).json({ errors: [{ msg: err }], "msg": "Server Error" });
                }
                if (result.length > 0) {
                    return res.status(400).json({ errors: { msg: ["Student already exists"] } });
                }

                res.status(200).json({ msg: "ok" });
            }
            );
        
        
        } catch (err) {
            res.status(500).json({ errors: { "msg": "Server Error" } });
        }
    }
);




// var maxFileSize = 2 * 1024 * 1024;
// var sizeinMB = maxFileSize / (1024 * 1024);


// checkpages.post('/checkpage2',
//     upload,

//     async (req, res) => {
//         try {
//             const errors = validationResult(req);
//             if (!errors.isEmpty()) {
//                 return res.status(400).json({ errors: errors.array().map((err) => err.msg) });
//             }


//             if (!req.files) {
//                 return res.status(400).json({ errors: [{ msg: "Please upload this require file" }] });
//             }

//             // if(req.files.image1[0].size > maxFileSize ){
//             //     return res.status(400).json({ errors: [{ msg: `Please upload a file less than ${sizeinMB} MB `}] });
//             // }

//             for (let i = 1; i <= 4 ; i++) {
//                 if(!req.files[`image${i}`]){
//                     return res.status(400).json({ errors: [{ msg: `Please upload a image number ${i} `}] });
//                 }
//                 let file = req.files[`image${i}`][0].size || 0;
//                 if(file > maxFileSize ){
//                         return res.status(400).json({ errors: [{ msg: `Please upload a image number ${i} less than ${sizeinMB} MB `}] });
//                     }
//             }



//             res.status(200).json({ msg: "ok" ,file:req.files});

//         } catch (err) {
//             res.status(500).json({ errors: [{ msg: err }], "msg": "Server Error" });
//         }
//     }
// );








export default checkpages;
