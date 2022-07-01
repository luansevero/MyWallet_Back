import db from '../setup/db.js';

async function costumerWallet(req, res){
    const costumer = res.locals;

    await db.collection('wallet').findOne({})



    /*      
        {
            _id: "",
            token: "",
            transaction:[
            ]
        }
    */

    

  res.send(wallet);
}

async function updateCostumerCurrency(req, res){
    const newCostumer = req.body;
    const { costumer } = req.locals;

    await db.collection('costumers').updateOne({
        _id: costumer.userId
    }, {
        $set: newCostumer
    });

    res.sendStatus(200);
}



export { costumerWallet, updateCostumerCurrency }