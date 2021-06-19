import { LoginState } from "../../pages/shared/login";
import api from "../shared/api";

const loginService = async (data: LoginState) => {
    await api.post('login', data)
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
}

export default loginService;