import joi from "joi";

const transactionSchema = joi.object({
    value: joi.number().required(),
    description: joi.string().min(1).required(),
    type: joi.string().valid('positive', 'negative').required()
})

export { transactionSchema }