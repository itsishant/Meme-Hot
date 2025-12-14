import { type Request, type Response, type NextFunction } from "express";
import dot from "dotenv";
import jwt from "jsonwebtoken";
dot.config();

const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
    console.log("JWT SECRET is not defined")
}
const middlewareAuthentication = (req: Request, res: Response, next: NextFunction) => {
    try {

        const authHeader = req.headers.authorization;

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized: No token provided"
        });
    }   

    const token = authHeader.split(" ")[1];
    if (!token) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized: Invalid token"
        })
    }

    const verify = jwt.verify(token, JWT_SECRET!);
    if (!verify) {
        return res.status(401).json({
            success: false,
            message: "Unauthorized: Token verification failed"
        })
    }
    
    next();


    }  catch (error) {
  console.log("Error in authentication middleware:", error);
  return res.status(401).json({
    success: false,
    message: "Internal Server Error",
  });
}
}

export {
    middlewareAuthentication
}
