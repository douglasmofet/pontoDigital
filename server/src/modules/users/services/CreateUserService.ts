import "reflect-metadata";
import { container } from 'tsyringe';
import AppError from "../../../shared/errors/AppError";
import IEditUserDTO from "../dtos/IEditUserDTO";

import UserRepository from '../repositories/UserRepository';

class CreateUserService {
	public async execute({
		name,
		email,
		password
	}: IEditUserDTO): Promise<IEditUserDTO> {
		const userRepository = container.resolve(UserRepository);

		const checkUserExists = await userRepository.getByEmail(email);

		if (checkUserExists) {
			throw new AppError('Este e-mail já está sendo utilizado.');
		}

		if (password.length < 6) {
			throw new AppError('A senha precisa ter no mínimo 6 carateres.');
		}

		const userId = await userRepository.create({
			name,
			email,
			password: password
		});

		const user = userRepository.getById(userId);

		return user;
	}
}

export default CreateUserService;