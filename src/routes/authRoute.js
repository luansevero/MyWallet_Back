import { Router } from "express";
import { signInSchemaValidation, signUpSchemaValidation } from "../middlewares/authSchemaValidationMiddlewares.js";
import updateTokenMiddleware from "../middlewares/updateTokenMiddleware.js";
import { signIn, signUp } from "../controllers/authController.js";

const authRouter = Router();

authRouter.post('/login',signInSchemaValidation, updateTokenMiddleware, signIn);
authRouter.post('/register',signUpSchemaValidation, signUp);

export default authRouter;