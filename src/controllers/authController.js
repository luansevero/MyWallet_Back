import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { db } from '../setup/db.js';
import { signInSchema, signUpSchema} from '../schemas/authSchemas.js'

async function signUp(req, res){
    const costumer = req.body;
    const { email } = req.body

    try{
        const haveAlready = await db.collection('costumers').findOne({email});
        if(haveAlready){
            return res.status(406).send('Email já em uso!');
        }

        const passwordHash = bcrypt.hashSync(costumer.password, 10);

        await db.collection('costumers').insertOne({...costumer, password: passwordHash})


        return res.sendStatus(201);
    } catch(error){
        return res.sendStatus(500);
    }

}

async function signIn(req, res){
    try{
        const costumer = await db.collection('costumers').findOne({ email });
    
        if(!costumer || !bcrypt.compareSync(password, user.password)){
            res.sendStatus(401);
        }

        const token = uuid();

        await db.collection('sessions').insertOne({ token, userId: user._id });

        res.send(token);
    } catch(erro){
        res.sendStatus(401);
    }
}


export { signUp, signIn }