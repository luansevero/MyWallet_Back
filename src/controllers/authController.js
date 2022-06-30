import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import db from '../db.js';

async function signUp(req, res){
    const user = req.body;
    
}

async function signIn(req, res){
    
}

export { signUp, signIn}