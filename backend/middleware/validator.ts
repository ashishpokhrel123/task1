import joi, { Schema } from "joi";
import SchemaValidation from "../validation/index";
import {
  InternalServerError,
  ValidationError,
} from "../utils/erros/CommonError";
import { NextFunction, Request, RequestHandler } from "express";


export const ValidateRequest = (
  validator
)=> {
  if (!SchemaValidation.hasOwnProperty(validator)) {
    throw new ValidationError(`'${validator}' is require`);
  }

  return async (
    req: Request,

    next: NextFunction
  ) => {
    try {
      const validateBodyPayload = await SchemaValidation[
        validator
      ].validateAsync(req.body);
      req.body = validateBodyPayload;
      next();
    } catch (error) {
      if (joi.isError(error)) {
        throw new ValidationError(`${error.details[0].message}`);
      }
      throw new InternalServerError("Internal Server Error");
    }
  };
};
