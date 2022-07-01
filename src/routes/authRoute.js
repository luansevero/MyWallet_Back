import { Router } from "express";
import { signInSchemaValidation, signUpSchemaValidation } from "../middlewares/authSchemaValidationMiddlewares.js";
import { signIn, signUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post('/login',signInSchemaValidation, signIn);
authRouter.post('/register',signUpSchemaValidation, signUp);

export default authRouter;