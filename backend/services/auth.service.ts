import bcrypt from "bcryptjs";
import { User } from "../schema/user";
import { LoginDTO, RegisterDTO } from "../dto/auth.dto";
import { NotFoundError, UnAuthorizedError } from "../utils/erros/CommonError";
import { generateToken, hashPassword } from "../helper/authHelper";

export const register = async ({ name, email, password }: RegisterDTO) => {
  const hashedPassword = hashPassword(password);
  const newUser = new User({ name, email, password: hashedPassword });
  await newUser.save();
};

export const login = async ({ email, password }: LoginDTO) => {
  const isUserExist:any = await User.findOne({ email });
  if (!isUserExist) {
    throw new NotFoundError("User not found");
  }

  const isPasswordValid = await bcrypt.compare(password, isUserExist?.password);
  if (!isPasswordValid) {
    throw new UnAuthorizedError("Invalid Credentials");
  }

  return generateToken(isUserExist);
};
