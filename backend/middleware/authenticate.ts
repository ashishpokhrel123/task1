import { Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { IRequest } from "../type";

export const auth = (req: IRequest, res: Response, next: NextFunction) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "UnAuthorirised" });
  const secret:any =  process.env.JWT_SECRET;
  

  // verfying  token
  jwt.verify(token, secret, (error, decoded) => {
    if (error) return res.status(403).json({ message: "Invalid token" });
    req.user = decoded;
    next();
  });
};
