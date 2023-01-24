// Ngakses api

import axiosInit from '../../config/config'

const getAll = () => {
    return axiosInit.get('/regions')
}

const getOne = id => {
    return axiosInit.get(`/regions/${id}`)
}

const create = data => {
    return axiosInit.post('regions/add', data)
}

const update = (id, data) => {
    return axiosInit.put(`regions/update/${id}`, data)
}

const remove = id => {
    return axiosInit.delete(`regions/${id}`)
}

const regionService = {
    getAll,
    getOne,
    create,
    update,
    remove
}

export default regionService