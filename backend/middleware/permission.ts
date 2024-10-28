import { Response, NextFunction } from "express";
import { IRequest } from "../type";

export const checkPermission = (role: string[]) => {
  return (req: IRequest, res: Response, next: NextFunction) => {
    const isValidUser = req.user;

    if (!isValidUser || !role.includes(isValidUser.role))
      return res.status(403).json({ message: "Access Forbidden" });
    next();
  };
};
