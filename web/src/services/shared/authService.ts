// import { UserState } from "../../pages/shared/login";
import api from "../shared/api";

export const authServiceLogin = async (data: any) => {
	await api.post('user', data);
}

export const authServiceLogout = async (data: any) => {
	await api.post('user', data);
}