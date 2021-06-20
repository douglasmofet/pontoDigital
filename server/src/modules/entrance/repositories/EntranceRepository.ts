import connection from "../../../database/connection";
import IEntranceEditDTO from "../dtos/IEditEntranceDTO";
import EntranceStatusEnum from "../enums/EntranceStatusEnum";

class EntranceRepository {
	async create(entity: IEntranceEditDTO) {
		const [id] = await connection('entrance')
			.insert(entity);

		return id;
	}

	async getById(id: number) {
		const user = await connection('entrance')
			.where('id', id)
			.first();

		return user;
	}

	async getByUserInDay(userId: number, dataRef: Date) {
		const lastEntranceDate = await connection('entrance')
			.where('userId', userId)
			// .where('status', EntranceStatusEnum.Active)
			.where('date', dataRef);

		return lastEntranceDate;
	}

	async getByUser(userId: number) {
		const lastEntranceDate = await connection('entrance')
			.where('userId', userId)
			.orderBy('date', 'desc');

		return lastEntranceDate;
	}

	async getFirstYearByUser(userId: number) {
		const firstEntranceDate = await connection('entrance')
			.where('userId', userId)
			.select('date')
			.first();

		return firstEntranceDate;
	}
}

export default EntranceRepository;