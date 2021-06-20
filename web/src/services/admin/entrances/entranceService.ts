import { IEntranceEdit } from './../../../pages/admin/entrances/index';
import api from "../../shared/api";
import handleErrors from "../../shared/errorsService";

export const createEntranceService = async (data: IEntranceEdit): Promise<IEntranceEdit> => {
	return api.post('/entrance/create', data)
		.then((response) => {

			alert('Lançamento cadastrado com sucesso!');
			return response.data;
		})
		.catch((error) => {
			handleErrors(error);
		})
}