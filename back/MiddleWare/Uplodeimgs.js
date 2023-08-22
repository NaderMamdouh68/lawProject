import multer from 'multer';
import path from "path";
import fs from "fs";


const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        if (fs.existsSync(`./public/imgs/${req.body.national_id}`)) {
            cb(null, `./public/imgs/${req.body.national_id || req.national_id}`);
        } else {
            fs.mkdirSync(`./public/imgs/${req.body.national_id}`);
            cb(null, `./public/imgs/${req.body.national_id || req.national_id}`);
        }
    },
    filename(req, file, cb) {
        return cb(null, `${req.body.name || req.student_name}_${file.originalname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const maxSize = 1 * 1024 * 1024;


const upload = multer({
    storage: storage,

    // fileFilter: (req, file, cb) => {
    //     const fileTypes = /jpeg|jpg|png|webp/;
    //     const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
    //     const mimetype = fileTypes.test(file.mimetype);

    //     // if (mimetype && extname) {
    //     //     return cb(null, true);
    //     // }else{
    //     //     cb("Error: Images Only!");
    //     // }

    // },



}).fields([
    { "name": "image1", maxCount: 1 }, //person image
    { "name": "image2", maxCount: 1 }, //photo_national_id
    { "name": "image3", maxCount: 1 }, //birth_certificate
    { "name": "image4", maxCount: 1 }, //academic_qualification
    { "name": "image5", maxCount: 1 }, //grade_statement
    { "name": "image6", maxCount: 1 }, //good_conduct_form
    { "name": "image7", maxCount: 1 }, //approval_from_employer
    { "name": "image8", maxCount: 1 }, //position_on_military
    { "name": "image9", maxCount: 1 }, //masters_photo
    { "name": "image10", maxCount: 1 } //equ_photo
]);

export default upload;