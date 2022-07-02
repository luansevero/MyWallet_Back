async function updateTokenMiddleware(req,res,next){
    const { email, password } = req.body;
    try{
        const costumer = await db.collection('costumers').findOne({ email });
    
        if(!costumer || !bcrypt.compareSync(password, costumer.password)){ return res.sendStatus(401);}

        const token = uuid();

        await db.collection('sessions').insertOne({ token, userId: ObjectId(costumer._id) });

        /*
        const wallet = await db.collection('wallets').findOne({userId: ObjectId(costumer._id)});
        if(!wallet){return res.sendStatus(401)};

        await db.collection('wallets').updateOne({

        }, { $set: {...wallet, [wallet.token]: token}})
        */

        res.locals.token = token;
    } catch(erro){
        res.sendStatus(401);
    }
}

export default updateTokenMiddleware