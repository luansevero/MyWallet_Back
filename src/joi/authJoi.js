import joi from "joi";

function signInVerification(signInData){
    const signInSchema = joi.object({
        email: joi.string().email().required(),
        password: joi.string().min(8).required()
    })
    const validation = signInSchema.validate(signInData);
    if(validation.error){
        return false;
    }   return true
};

function signUpVerification(signUpData){
    const signUpSchema = joi.object({
        name: joi.string().required(),
        email: joi.string().email().required(),
        password: joi.string().min(8).required(),
    })
    const validation = signUpSchema.validate(signUpData);
    if(validation.error){
        return false;
    }   return true
};

export { signInVerification, signUpVerification};