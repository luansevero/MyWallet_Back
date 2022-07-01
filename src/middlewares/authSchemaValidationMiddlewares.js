import { signInSchema, signUpSchema } from "../schemas/authSchemas.js";


function signUpSchemaValidation(req,res,next){
    const costumer = req.body;
    const validation = signUpSchema.validate(costumer);
    if(validation.error){return res.sendStatus(400)};
    next();
}

function signInSchemaValidation(req,res,next){
    const {email, password} = req.body;
    const validation = signInSchema.validate({email:email,password:password});
    if(validation.error){return res.sendStatus(400)};
    next();
}

export { signUpSchemaValidation, signInSchemaValidation }
