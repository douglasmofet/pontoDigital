import "reflect-metadata";
import { container } from 'tsyringe';
import AppError from "../../../shared/errors/AppError";
import IEditEntranceDTO from "../dtos/IEditEntranceDTO";
import EntranceStatusEnum from "../enums/EntranceStatusEnum";
import EntranceTypeEnum from "../enums/EntranceTypeEnum";

import EntranceRepository from '../repositories/EntranceRepository';

class CreateEntranceService {
	public async execute({
    userId,
    hour,
    date,
    type,
    status
	}: IEditEntranceDTO): Promise<IEditEntranceDTO> {
		const entranceRepository = container.resolve(EntranceRepository);

    let entrancesDayRef:IEditEntranceDTO[] = [];
    entrancesDayRef = await entranceRepository.getByUserInDay(userId, date);

    const counter = entrancesDayRef 
                  ? entrancesDayRef.length
                  : EntranceTypeEnum.Start;

    if (counter == EntranceTypeEnum.End) {
      throw new AppError('Todos os lançamentos do dia já foram realizados!');
    }

		const EntranceId = await entranceRepository.create({
      userId,
      hour,
      date,
      type: this.getType(counter),
      status: EntranceStatusEnum.Active
		});

		const Entrance = entranceRepository.getById(EntranceId);

		return Entrance;
	}

  
  public getType(counter: number){
    var _type = EntranceTypeEnum.Start;

    switch (counter) {
      case EntranceTypeEnum.Start:
        _type = EntranceTypeEnum.MiddleStart
        break;
      case EntranceTypeEnum.MiddleStart:
        _type = EntranceTypeEnum.MiddleEnd
        break;
      case EntranceTypeEnum.MiddleEnd:
        _type = EntranceTypeEnum.End
        break;
    
      default:
        _type = EntranceTypeEnum.Start
    }

    return _type;
  }

}

export default CreateEntranceService;