import api from "../shared/api";
import { IUserEdit } from "../../pages/shared/register";

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

			const message = error.response.data.message;

			if (message)
				alert(`ERRO: ${message}`);
				
			return null;
		})
}