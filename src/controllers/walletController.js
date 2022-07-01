import db from '../setup/db.js';

async function costumerWallet(req, res){
    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '')

    if (!token) {return res.sendStatus(401)}

    const session = await db.collection('sessions').findOne({ token });

    if (!session) {return res.sendStatus(401)}

    const wallet = await db.collection('wallets').findOne({ _id: session.userId });
    if (!wallet) {return res.sendStatus(401);}

    delete wallet.password;

  res.send(wallet);
}

async function updateCostumer(req, res){
    const newCostumer = req.body;
    const { authorization } = req.headers; //midle
    const token = authorization?.replace('Bearer ', ''); //midle

    if(!token){return res.sendStatus(401);} //midle

    const session = await db.collection('sessions').findOne({ token }); //midle

    if(!session){return res.sendStatus(401);} //midle

    const costumer = await db.collection('costumers').findOne({ _id: session.userId });
    if(!user){return res.sendStatus(401)};

    await db.collection('costumers').updateOne({
        _id: session.userId
    }, {
        $set: newCostumer
    });

    res.sendStatus(200);
}



export { updateCostumer }