import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config();

import { signIn, signUp } from './controllers/authController.js';

const server = express();
server.use(cors());
server.use(json());

/*SIgnIn, SignUp Route*/
server.post('/login', signIn);
server.post('/register', signUp);

/*Wallet Route*/

server.listen(process.env.PORT, () =>{
    console.log('Server listening on 5000')
})