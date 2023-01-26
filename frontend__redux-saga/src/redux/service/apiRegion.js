import axios from "../../config/http-common";
import config from "../../config/config";

const getAll = async () => {
	try {
		const res = await axios.get(config.endpoint.region.all);
		return res;
	} catch (error) {
		return error.message;
	}
};

const getOne = (id) => {
	return axios.get(`${config.endpoint.region.all}/${id}`);
};

const create = async (data) => {
	try {
		return await axios.post(config.endpoint.region.create, data);
	} catch (error) {
		return error.message;
	}
};

const update = async (data) => {
	try {
		return await axios.put(`${config.endpoint.region.update}/${data.regionId}`, data);
	} catch (error) {
		return error.message;
	}
};

const remove = async (id) => {
	try {
		return await axios.delete(`${config.endpoint.region.delete}/${id}`);
	} catch (error) {
		return error.message;
	}
};

const regionService = {
	getAll,
	getOne,
	create,
	update,
	remove,
};

export default regionService;
