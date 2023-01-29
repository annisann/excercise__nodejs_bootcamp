// Region Table CRUD

import { REGIONS_URL } from "@/data/url";
import { Region } from "@/types/region";
import axios from "axios";

const getAll = async (): Promise<any> => {
	return await axios.get(REGIONS_URL);
};

const getOne = async (id: number) => {
	return await axios.get(`${REGIONS_URL}/${id}`);
};

const remove = async (data: Region): Promise<any> => {
	return await axios.delete(`${REGIONS_URL}/${data.regionId}`);
};

const update = async(data: Region): Promise<any> => {
	return await axios.put(`${REGIONS_URL}/update/${data.regionId}`)
}

const regionService = {
	getAll,
	getOne,
	remove,
	update
};

export default regionService;
