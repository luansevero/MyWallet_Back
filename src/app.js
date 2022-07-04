import express, {json} from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import router from './routes/routes.js'

dotenv.config();

const server = express();
server.use(cors());
server.use(json());
server.use(router);

const PORT = process.env.PORT
server.listen(PORT, () =>{console.log(`Server listening on ${PORT}`)})


/*


            let [walletBalance] =  await db.collection('transactions').aggregate([
                {$match: { userId: costumer._id}},
                {$group : {_id: "$userId", total: {$sum:"$value"}}}
            ]).toArray();
            if(!walletBalance){
                balance = 0;
            } else {
                balance = walletBalance.total
            }

, balance:balance
*/