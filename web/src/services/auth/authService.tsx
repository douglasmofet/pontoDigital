import { IUserEdit } from "../../pages/shared/register";
import api from "../shared/api";
import handleErrors from "../shared/errorsService";

export const authServiceLogin = async (data: any): Promise<IUserEdit> => {
	return await api.post('/login', data)
		.then((response) => {
			return response.data;
		})
		.catch((error) => {
			handleErrors(error);
		});
}

// export const authServiceLogout = async (data: any) => {
// 	await api.post('user', data);
// }