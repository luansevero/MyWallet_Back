import { Router } from "express";
import  tokenValidationMiddleware  from '../middlewares/tokenValidationMiddleware.js'
import { transactionSchemaValidation } from "../middlewares/transactionSchemaValidationMiddleware.js";

import { getCostumerWallet, newTransition } from '../controllers/walletController.js'

const walletRouter = Router();

walletRouter.get('/wallet', getCostumerWallet);
walletRouter.post('/wallet/entry',transactionSchemaValidation, newTransition);
walletRouter.post('/wallet/exit',transactionSchemaValidation, newTransition);

export default walletRouter;