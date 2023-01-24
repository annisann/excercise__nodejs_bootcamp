import axios from "axios"
import config from "./config"

let token = localStorage.getItem('token')

export default axios.create({
    baseUrl: config.baseUrl,
    headers: {
        "Content-type": "application/json",
        // "Authorization": "Bearer " + token
        "Authorization": token
    }
})
