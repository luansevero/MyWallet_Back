import { Router } from 'express';
import authRouter from './authRoute.js';
import walletRouter from './walletRoute.js';

const router = Router();
router.use(authRouter);
router.use(walletRouter);
export default router;