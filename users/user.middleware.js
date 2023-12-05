const validateUser = (req, res, next) => {
  try{
const userSchema = joi.object({
  username: joi.string().empty().required().messages({
    "string.base":  `"username" must be of type "text"` ,
    "string.empty": `"username" cannot be empty` ,
    "string.required": `"username" is required`
  }),

  password: joi.string().empty().required().min().messages({
    "string.base":  `"password" must be of type "text"` ,
    "string.empty": `"password" cannot be empty` ,
    "string.required": `"password" is required`,
    "string.min": `"password should have minimuim of {8}`
  }),

  email: joi.string().empty().emal().required().messages({
    "string.base":  `"email" must be of type "text"` ,
    "string.empty": `"email" cannot be empty` ,
    "string.required": `"email" is required`
  }),

  phone_number: joi.string().empty().required().messages({
    "string.base":  `"phone_number" must be of type "text"` ,
    "string.empty": `"phone_number" cannot be empty` ,
    "string.required": `"phone_number" is required`
  }),
  gender: joi.string().empty().valid("male", "female"),

  address: joi.string().empty().required().messages({
    
  })
})

} catch(err) {


}

}