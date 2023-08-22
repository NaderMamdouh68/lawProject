import e from 'express';
import express from 'express';
import jwt from 'jsonwebtoken';


const key = "secretkey";


const checkadmin = async (req, res, next) => {
    try {
        let token = req.session.token
        let type = req.session.type;    
        if (!token) {
            return res.status(401).json({ Admin: false, msg: "Unauthorized" });
        }else if(type != 1){
            return res.status(401).json({ Admin: false, msg: "Unauthorized" });
        } else {
            token = token.split(" ")[1];
            jwt.verify(token, key, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ Admin: false, msg: err });
                }
                
                req.faculty_id = decoded.faculty_id;
                req.manager_id = decoded.manager_id;
                req.manager_email = decoded.manager_email;
                next();
            }
            );
        }



    } catch (err) {
        return res.status(500).json("user Error");
    }
}

export default checkadmin;