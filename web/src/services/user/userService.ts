import api from "../shared/api";
import { IUserEdit } from "../../pages/shared/register";
import handleErrors from "../shared/errorsService";

export const userService = async (data: any) => {
	await api.post('user', data);
}

export const createUserService = async (data: IUserEdit): Promise<IUserEdit> => {
	return api.post('/users/create', data)
		.then((response) => {

			alert('Usuário cadastrado com sucesso!');
			return response.data;
		})
		.catch((error) => {
			handleErrors(error);
		})
}