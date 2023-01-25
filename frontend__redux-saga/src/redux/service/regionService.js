// Ngakses api

import axios from "../../config/http-common"
import config from "../../config/config"

const getAll = () => {
    return axios.get(config.baseUrl + '/regions')
}

const getOne = id => {
    return axios.get(config.baseUrl + `/regions/${id}`)
}

const create = data => {
    return axios.post(config.baseUrl + '/regions/add', data)
}

const update = (id, data) => {
    return axios.put(config.baseUrl + config.endpoint.regions.update + `/${id}`, data)
}

const remove = id => {
    return axios.delete(config.baseUrl + `/regions/${id}`)
}

const regionService = {
    getAll,
    getOne,
    create,
    update,
    remove
}

export default regionService