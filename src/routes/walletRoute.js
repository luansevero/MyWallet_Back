import { Router } from "express";
import  tokenValidationMiddleware  from '../middlewares/tokenValidationMiddleware.js'
import { transactionSchemaValidation } from "../middlewares/transactionSchemaValidationMiddleware.js";

import { getCostumerWallet, newTransition } from '../controllers/walletController.js'

const walletRouter = Router();

walletRouter.get('/wallet', tokenValidationMiddleware, getCostumerWallet );
walletRouter.post('/wallet/entry', tokenValidationMiddleware,transactionSchemaValidation, newTransition);
walletRouter.post('/wallet/exit', tokenValidationMiddleware,transactionSchemaValidation, newTransition);

export default walletRouter;