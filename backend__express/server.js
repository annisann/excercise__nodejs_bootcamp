import "dotenv/config"
import express from "express"
import models, {sequelize} from "./models/init-models"
import routes from "./routes/indexRoutes"

const PORT = process.env.port || 4141

const app = express()

// request bisa dibaca
app.use(express.json())
app.use(express.urlencoded(
    {
        extended: true // all datatype is accepted, else: only array & string
    }
))

app.use(
    (request, response, next) => {
        request.context = {models}
        next()
    }
)

app.use(routes)

// check connection to database & for database do not drop everytime server connects
const dropDatabaseSync = false
sequelize.sync({
    force:dropDatabaseSync
}).then(
    () => {
        if(!dropDatabaseSync) {
            console.log("Database do not drop")
        }
    }
)

app.listen(
    PORT,
    () => {
        console.log(`Server listens on port ${PORT}`)
    }
)