const { checkSchema } = require("express-validator");
const { checkIfEmailExist } = require("..");

const createUserValidator = checkSchema({
    username: {
        isLength: {
            options: {
                max: 20,
                min: 3
            },
            errorMessage: "Username's length must be aleast 3 characters"
        }
    },
    email: {
        isEmail: true,
        errorMessage: "Invalid email address",
        custom: {
            options: async value => {
                const ifExist = await checkIfEmailExist(value)
                if(ifExist)
                    throw new Error('Email already registered!')
            }
        }
    },
    password: {
        isLength: {
            options: {
                max: 30,
                min: 6
            },
            errorMessage: "Passport must aleast 6 characters"
        }
    }
})
module.exports = {createUserValidator}