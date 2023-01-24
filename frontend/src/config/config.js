/* eslint-disable import/no-anonymous-default-export */
import axios from "axios"

const config = {
    baseUrl: 'http://localhost:4141',
    endpoint: {
        auth: '/auth',
        calculator: '/calculator',
        signin: '/user',
    }
};

let token = localStorage.getItem('token')
const axiosInit = axios.create({
    baseUrl: config.baseUrl,
    headers: {
        "Content-type": "application/json",
        // "Authorization": token
    }
})

export default {
    config, 
    axiosInit
}