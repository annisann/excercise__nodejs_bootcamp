import personController from "../personController"
import bcrypt from "bcrypt"

const logIn = async(request, response) => {
    const input = request.body

    // find person by username
    personController.findUserByEmail(
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
                    response.send(`Log In succeed! Hello ${userData.firstname}`)
                } else {
                    response.send(`Password is not match!`)
                }
            } else {
                response.send(`User not found!`)
            }
        },
        input.email)
}

export default logIn