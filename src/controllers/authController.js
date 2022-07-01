import bcrypt from 'bcrypt';
import { v4 as uuid } from 'uuid';
import { db, ObjectId } from '../setup/db.js';


async function signUp(req, res){
    const costumer = req.body
    const { email } = req.body

    try{
        const haveAlready = await db.collection('costumers').findOne({email});
        if(haveAlready){
            return res.status(406).send('Email já em uso!');
        }
        const passwordHash = bcrypt.hashSync(costumer.password, 10);
        await db.collection('costumers').insertOne({...costumer, password: passwordHash})
        console.log('Usuario cadastrado com sucesso')

        const costumer = await db.collection('costumers').findOne({ email });
        await db.collection('wallets').insertOne({
            _id: ObjectId(costumer._id),
            token: "",
            transaction:[
            ]
        })
        console.log('Carteira criada com sucesso')

        return res.sendStatus(201);
    } catch(error){
        return res.sendStatus(500);
    }

}

async function signIn(req, res){
    const { token } = res.locals;

    res.send(token)
}


export { signUp, signIn }