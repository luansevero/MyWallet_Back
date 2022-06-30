import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import { signIn, signUp, singUp } from './controllers/authController';

const server = express();
server.use(cors());
server.use(json());

/*SIgnIn, SignUp Route*/
server.post('/login', (req,res) => {signUp});
server.post('/register', (req,res) => {signIn});

/*Wallet Route*/
