import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { NotFoundError, UnAuthorizedError } from "../utils/erros/CommonError";
const secret = process.env.JWT_SECRET;

/*token generate */
export const generateToken = (payload: object) => {
  if (!secret) {
    throw new NotFoundError("JWT_SECRET is not defined");
  }
  return jwt.sign(payload, secret, { expiresIn: "1h" });
};
/* token verify */
export const verifyToken = (token: string) => {
  try {
    if (!secret) {
      throw new NotFoundError("JWT_SECRET is not defined");
    }
    return jwt.verify(token, secret);
  } catch (error) {
    throw new UnAuthorizedError("UnAuthorised");
  }
};

/* for hashing password */
export const hashPassword = async (password: string): Promise<String> => {
  const saltRounds = 10;
  const hashedPassword = await bcrypt.hash(password, saltRounds);
  return hashedPassword;
};
