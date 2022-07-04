import { db, ObjectId } from '../setup/db.js';
import dayjs from "dayjs"

//Get /wallet
async function getCostumerWallet(req,res){
    const { costumer } = res.locals
    try{
        const wallet = await db.collection('transactions').find({userId: costumer._id}, {projection:{_id:0, userId:0}}).toArray();

        let balanceValue  = 0.00;
        let balanceType;
        if(wallet){
            let [balance] =  await db.collection('transactions').aggregate([
                {$match: { userId: costumer._id}},
                {$group : {_id: "$userId", total: {$sum: "$value"}}}
            ]).toArray();
            console.log(balance)
            if(!balance){
                balanceValue = 0.00;
            } else {
                balanceValue = balance.total.toFixed(2)
            }
            if(balanceValue > 0){
                balanceType = "positive"
            } else {balanceType = "negative"}
        }


        res.send({name:costumer.name, transactions:wallet, balance:{balanceValue:balanceValue, balanceType:balanceType}})
    }catch(error){
        res.sendStatus(500)
    }
}
//Post wallet/entry - wallet/exit
async function newTransition(req,res){
    const { costumer } = res.locals;
    const { value, description, type } = req.body
    console.log(req.body)
    /*const { costumerId } = req.locals;
    userId: costumerId,
    */
    const date = dayjs().format('MM/DD')
    console.log(date)
    try{
        await db.collection('transactions').insertOne({
            userId: costumer._id,
            value: value,
            description: description,
            date: date,
            type: type
        })
        res.sendStatus(200)
    }catch(error){
        res.sendStatus(500)
    }
}

/*



db.collection('transactions').aggregate([{$match: { userId: 62bf9fd4f2e8dad4d5a75579 }},{$group : {_id: "$userId", total: {$sum:"$value"}}}]).toArray()
*/



export { getCostumerWallet, newTransition }