
const { body } = require('express-validator');

const validationCheck = [   body("firstname", "The first name must contain alpha characters only").isAlpha(),
                            body("lastname", "The last name must contain alpha characters only").isAlpha(),
                            body("age", "invalid age").isNumeric(),
                            body("phone", "Please enter a valid phone number").isNumeric(),
                            body("email", "Please enter a valid email").isEmail(), 
                            body("password", "Your password is too weak").isLength({ min: 6 }),
                                                                                                                ]
module.exports=validationCheck