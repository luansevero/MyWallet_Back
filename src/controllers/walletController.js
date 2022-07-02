import { db, ObjectId } from '../setup/db.js';
import dayjs from "dayjs"

//Get /wallet
async function getCostumerWallet(req,res){
    const { costumer } = req.locals
    try{
        const wallet = await db.collection('transactions').find({userId: ObjectId(costumer._id)}).toArray();
        let balance = await db.collection('account').aggregate([{$match: { userId: session.userId }},{$group : {_id: "$userId", total: {$sum:"$value"}}}]).toArray();
        if(!balance){
            balance = 0;
        }
        delete balance._id
        res.send({name:costumer.name, transaction:wallet, balance})
    }catch(error){
        res.sendStatus(500)
    }
}
//Post wallet/entry - wallet/exit
async function newTransition(req,res){
    const { value, description, isEntry } = req.body
    /*const { costumerId } = req.locals;
    userId: costumerId,
    */
    const date = dayjs().format('DD/MM')
    try{
        await db.collection('transactions').insertOne({
            value: value,
            description: description,
            isEntry: isEntry,
            date: date
        })
        res.sendStatus(200)
    }catch(error){
        res.sendStatus(500)
    }
}




export { getCostumerWallet, newTransition }