import connection from "../../../database/connection";
import IEditUserDTO from "../dtos/IEditUserDTO";

class UsersRepository {
	async create(entity: IEditUserDTO) {
		const [id] = await connection('user')
			.insert(entity);

		return id;
	}

	async getById(id: number) {
		const user = await connection('user')
			.where('id', id)
			.first();

		return user;
	}

	async getByEmail(email: string) {
		const user = await connection('user')
			.where('email', email)
			.first();

		return user;
	}

	async getByEmailAndPassword(email: string, password: any) {
		const user = await connection('user')
			.where('email', email)
			.where('password', password)
			.first();

		return user;
	}
}

export default UsersRepository;