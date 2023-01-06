import "dotenv/config"
import express from "express"
import models, {sequelize} from "./models/init-models"
import router from "./routes/indexRoutes"

const PORT = process.env.port || 4141

const app = express()
app.use(express.json())
app.use(express.urlencoded(
    {
        extended: true
    }
))
app.use(
    (request, response, next) => {
        request.context = {models}
        next()
    }
)

const dropDatabaseSync = false
// biar ga didrop setelah jalanin
sequelize.sync({
    force:dropDatabaseSync
}).then(
    () => {
        if(dropDatabaseSync) {
            console.log("Database do not drop")
        }
    }
)
// app.use(
//     '/eshopay/',
//     (request, response) => {
//         response.send('Hellooooooooo')
//     }
// )

app.listen(
    PORT,
    () => {
        console.log(`Server listens on port ${PORT}`)
    }
)

app.use(router)