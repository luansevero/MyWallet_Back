import bcrypt from 'bcrypt';
import { db } from '../setup/db.js';


async function signUp(req, res){
    const costumer = req.body
    const { email } = req.body
    console.log('Verificado com sucesso')
    try{
        const haveAlready = await db.collection('costumers').findOne({email});
        if(haveAlready){
            return res.status(406).send('Email já em uso!');
        }
        const passwordHash = bcrypt.hashSync(costumer.password, 10);
        await db.collection('costumers').insertOne({...costumer, password: passwordHash})
        console.log('Usuario cadastrado com sucesso')
        return res.sendStatus(201);
    } catch(error){
        return res.sendStatus(500);
    }

}

async function signIn(req, res){
    const { token } = res.locals;
    console.log(`aqui está seu ${token}`)
    res.send({token: token})
}


export { signUp, signIn }