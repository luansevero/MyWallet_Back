import { Router } from "express";
import  tokenValidationMiddleware  from '../middlewares/tokenValidationMiddleware.js'

import { costumerWallet, updateCostumerCurrency } from '../controllers/walletController.js'

const walletRouter = Router();

walletRouter.post('/wallet',tokenValidationMiddleware, costumerWallet);
walletRouter.post('/register',tokenValidationMiddleware, updateCostumerCurrency);

export default walletRouter;