import express from 'express';
import jwt from 'jsonwebtoken';


const key = "secretkey";


const user = async (req, res, next) => {
    try {
        let token = req.session.token
        if (!token) {
            return res.status(401).json({ user: true, msg: "Unauthorized" });
        } else {
            token = token.split(" ")[1];
            jwt.verify(token, key, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ user: true, msg: err});
                }
                req.student_id = decoded.student_id;
                req.national_id = decoded.national_id;
                req.student_name = decoded.student_name;
                
                next();
            }
            );
        }



    } catch (err) {
        return res.status(500).json("user Error");
    }
}

export default user;