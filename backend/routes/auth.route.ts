import express  from "express"
import { loginSchemaValidation, registerSchemaValidation } from "../validation/registerSchemeValidation";
import AuthController from "../controller/auth.controller";
import { ValidateRequest }  from "../middleware/validator";
const router = express.Router();
router.route("/register").post(ValidateRequest(registerSchemaValidation),AuthController.signUp)
router.route("/login").post(ValidateRequest(loginSchemaValidation),AuthController.signIn)

export default router