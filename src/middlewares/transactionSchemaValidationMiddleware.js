import { transactionSchema } from "../schemas/transactionSchema.js";

function transactionSchemaValidation(req,res,next){
    const transaction = req.body;
    const validation = transactionSchema.validate(transaction);
    if(validation.error){return res.sendStatus(400)};
    console.log('Passei na valição')
    next();
}

export { transactionSchemaValidation };