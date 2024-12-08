import jwt from "jsonwebtoken";
const SECRET_KEY = "Sai@12345";

const authenticate = (req,res,next) =>{
    try{
        const token = req.headers.authorization.split(' ')[1];
        jwt.verify(token, SECRET_KEY);
        next();
    } catch (error){
        res.status(401).json({
            success:false,
            data: 'authentication failed'
        });
    }
}

export default authenticate;