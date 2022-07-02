import joi from "joi";

const transactionSchema = joi.object({
    value: joi.number().required(),
    description: joi.string().min(1).required(),
    isEntry: joi.string().valid('true', 'false').required(),
})

export { transactionSchema }