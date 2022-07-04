import { db, ObjectId } from '../setup/db.js'
import bcrypt from 'bcrypt'
import { v4 as uuid } from 'uuid';

async function updateTokenMiddleware(req,res,next){
    const { email, password } = req.body;
    try{
        const costumer = await db.collection('costumers').findOne({ email });

        if(!costumer || !bcrypt.compareSync(password, costumer.password)){ return res.sendStatus(401);}
        const token = uuid();

        await db.collection('sessions').insertOne({ token, userId: ObjectId(costumer._id) });

        res.locals.token = token;
        next()
    } catch(erro){
        console.log('Eu dei erro')
        res.sendStatus(401);
    }
}

export default updateTokenMiddleware