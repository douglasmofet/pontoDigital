import "reflect-metadata";
import { container } from 'tsyringe';
import AppError from "../../../shared/errors/AppError";

import EntranceRepository from '../repositories/EntranceRepository';

class GetEntranceListService {
  public async execute(userId: number): Promise<number[]> {

    const entranceRepository = container.resolve(EntranceRepository);

    let items = await entranceRepository.getByUser(userId);

    return items;
  }
}

export default GetEntranceListService;