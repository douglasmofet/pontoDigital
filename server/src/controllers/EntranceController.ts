import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import IEditEntranceDTO from '../modules/entrance/dtos/IEditEntranceDTO';
import EntranceStatusEnum from '../modules/entrance/enums/EntranceStatusEnum';

import GetEntranceYearsService from '../modules/entrance/services/GetEntranceYearsService';
import GetEntranceListService from '../modules/entrance/services/GetEntranceListService';
import CreateEntranceService from '../modules/entrance/services/CreateEntranceService';
import IEntranceEditDTO from '../modules/entrance/dtos/IEditEntranceDTO';

class Entrance {
  public async create(request: Request, response: Response) {
    const {
      userId,
      hour,
      date,
      type,
      status
    }: IEntranceEditDTO = request.body;

    const createEntrance = container.resolve(CreateEntranceService);

    try {
      const entrance = await createEntrance.execute({
        userId,
        hour,
        date,
        type,
        status
      });

      return response.json(entrance);

    } catch (error) {
      return response.status(error.statusCode).json(error);
    }
  }

  public async list(request: Request, response: Response) {
    // const {
    //   userId,
    //   date
    // } = request.body;

    const { userId, date } = request.query;

    const entranceList = container.resolve(GetEntranceListService);
      
    try {
      const items = await entranceList.execute(Number(userId));

      return response.json(items);

    } catch (error) {
      return response.status(error.statusCode).json(error);
    }
  }

  public async getYears(request: Request, response: Response): Promise<Response> {
    const { userId } = request.query;

    const getYears = container.resolve(GetEntranceYearsService);
      
    try {
      const years = await getYears.execute(Number(userId));

      return response.json(years);

    } catch (error) {
      return response.status(error.statusCode).json(error);
    }
  }
}

export default Entrance;