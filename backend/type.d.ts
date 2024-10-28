import { ObjectId } from "mongoose";

interface IUser {
    id: string;
    role: string;
}

export interface IRequest extends Request {
  user?: IUser;
}

export interface CustomRequest extends Request {
  body: any;
}

export interface IUser  {
  _id: ObjectId,
  name: string,
  email: string,
  role: string
}

