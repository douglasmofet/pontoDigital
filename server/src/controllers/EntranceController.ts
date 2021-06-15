import { Request, Response } from 'express';
import knex from '../database/connection';

import IEditEntranceDTO from '../modules/entrance/dtos/IEditEntranceDTO';
import EntranceStatusEnum from '../modules/entrance/enums/EntranceStatusEnum';

class Entrance {
  async create(request: Request, response: Response) {
    const {
      userId,
      hour,
      day,
      type
    } = request.body;

    const trx = await knex.transaction();

    const entrance: IEditEntranceDTO = {
      userId,
      hour,
      day,
      type,
      status: EntranceStatusEnum.active
    };

    await trx('entrance').insert(entrance);

    await trx.commit();

    return response.json({
      entrance
    });
  }

  async list(request: Request, response: Response) {
    const { id } = request.params;

    const user = await knex('user').where('id', id).first();

    if (!user) {
      return response.status(400).json({ message: 'User not found.' })
    }

    const items: IEditEntranceDTO[] = await knex('entrance')
      .where('entrance.userId', id)
      .select('items');

    return response.json({ user, items });
  }
}

export default Entrance;