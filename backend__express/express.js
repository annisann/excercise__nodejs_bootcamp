// Init express
const express = require('express')
const app = express()
app.use(express.json())

// Init database using PostgreSQL
const Pool = require('pg').Pool
const pool = new Pool(
    {
        host: "localhost",
        user: "postgres",
        password: " ",
        database: "adventurework",
        port: 5432
    }
)
console.log(pool)

const PORT = process.env.port || 4141

app.get(
    `/`, // url 
    function(request, response) {
        response.end("Hello")
    })

app.listen(
    PORT,
    () => {
        console.log(`Server listening on port ${PORT}`)
    }
)

// CRUD with sql raw native
app.get(
    "/departments",
    (request, response) => {
        /**
         ** Call `pool` for querying
         * Param 1: SQL Query
         * Param 2: Binding Parameter
         * Param 3: Result Callback
         */
        pool.query(
            "SELECT DepartmentID, Name, GroupName FROM hr.d",
            [],
            (error, result) => {
                if (error) {
                    throw new Error("Can't fetch result.")
                }
                response.status(200)
                    .json(result.rows) // Result shows in JSON
            }
        )
    })