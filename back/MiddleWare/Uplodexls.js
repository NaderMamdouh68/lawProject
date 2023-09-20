import multer from 'multer';
import path from "path";
import fs from "fs";


const storage = multer.diskStorage({
    destination: (req, file, cb) => {

        if (fs.existsSync(`./public/imgs`)) {
            cb(null, `./public/imgs`);
        } else {
            fs.mkdirSync(`./public/imgs/${req.body.national_id}`);
            cb(null, `./public/imgs`);
        }
    },
    filename(req, file, cb) {
        return cb(null, `${Date.now()}${path.extname(file.originalname)}`);
    }
});

const maxSize = 2 * 1024 * 1024;


const upload2 = multer({
    storage: storage,




})


export default upload2;