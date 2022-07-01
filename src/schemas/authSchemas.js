import joi from "joi";

const signInSchema = joi.object({
    email: joi.string().email().required(),
    password: joi.string().min(8).required()
})

const signUpSchema = joi.object({
    name: joi.string().min(1).trim().required(),
    email: joi.string().email({ tlds: { allow: false }}).required(),
    password: joi.string().min(8).required(),
})

export { signUpSchema, signInSchema };