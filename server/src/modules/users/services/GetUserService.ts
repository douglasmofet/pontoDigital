import IAuthDTO from "@modules/auth/dto/IAuthDTO";
import "reflect-metadata";
import { container } from 'tsyringe';
import AppError from "../../../shared/errors/AppError";
import IEditUserDTO from "../dtos/IEditUserDTO";

import UserRepository from '../repositories/UserRepository';

class GetUserService {
	public async execute({
		email,
		password
	}: IAuthDTO): Promise<IEditUserDTO> {
		const userRepository = container.resolve(UserRepository);

		const user = await userRepository.getByEmailAndPassword(email, password);

		if (!user) {
			throw new AppError('Usuário ou senha inválido.');
		}

		return user;
	}
}

export default GetUserService;