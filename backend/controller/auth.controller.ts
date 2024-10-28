import { Response } from "express";
import { login, register } from "../services/auth.service";
import { createResponse, sucessResponse } from "../utils/response/response";
import { CustomRequest } from "../type";

const signUp = async (data:any) => {
  try {
    const newUser = await register(data);
    return createResponse(201, "User created succesfully", newUser);
  } catch (error:any) {
    return createResponse(400, error.message, null);
  }
};

const signIn = async (data:any) => {
  try {
    const newUser = await login(data);
    return sucessResponse(200, "User login succesfully", newUser);
  } catch (error:any) {
    return sucessResponse(400, error.message, null);
  }
};

export default { signIn, signUp };
