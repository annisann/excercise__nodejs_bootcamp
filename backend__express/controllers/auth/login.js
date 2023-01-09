import jwt from "jsonwebtoken"
import personController from "../personController"
import bcrypt from "bcrypt"

const logIn = async(request, response) => {
    const input = request.body

    // find person by username
    await personController.findUserByEmail(
        (userResult) => {
            const userData = userResult[0]
            /** userResult:
             *      index 0: data     []
             *      index 1: metadata {}
             */
        
            //  check if user is in database
            if (userData) {
                // check if password match
                const passwordMatch = bcrypt.compareSync(input.password, userData.passwordhash)
                if (passwordMatch) {
                    // delete userResult.password
                    
                    let token = jwt.sign(userData, process.env.SECRET_KEY, { // add jwt secretkey in .env
                        expiresIn: '5m' // for token to expire
                    })

                    response
                        .status(200)
                        .json(
                            {
                                message:`Log In succeed! Hello ${userData.firstname}`,
                                token: token
                            })
                        
                } else {
                    response.send(`Password is not match!`)
                }
            } else {
                response.send(`User not found!`)
            }
        },
        input.email)
}

const checkToken = (request, response, next) => {
    if (!request.headers.authorization) {
        response.status(403).send(`You are not authorized`)
    } else {
        let token = request.headers.authorization

        try {
            jwt.verify(token, process.env.SECRET_KEY)
            return next() // process next method
        } catch (error) {
            return response.status(401).json("Invalid Token")
        }
    }
}

export default {
    logIn,
    checkToken
}