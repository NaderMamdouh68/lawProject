import e from 'express';
import express from 'express';
import jwt from 'jsonwebtoken';


const key = "secretkey";


const checkmanager = async (req, res, next) => {
    try {
        
        let token = req.session.token
        let type = req.session.type;
        if (!token) {
            return res.status(401).json({ manager: false, msg: "Unauthorized" });
        } else if(type != 0){
            return res.status(401).json({ manager: false, msg: "Unauthorized" });
        } else {
            token = token.split(" ")[1];
            jwt.verify(token, key, (err, decoded) => {
                if (err) {
                    return res.status(401).json({ manager: false, msg: err });
                }
                
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

export default checkmanager;