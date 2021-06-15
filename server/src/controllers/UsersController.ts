import { Request, Response } from 'express';
import knex from '../database/connection';

import IEditUserDTO from '../modules/users/dtos/IEditUserDTO';

class UsersController {
  async create(request: Request, response: Response) {
    const {
      name,
      email,
      password,
    } = request.body;

    const trx = await knex.transaction();

    const user: IEditUserDTO = {
      name,
      email,
      password
    };

    await trx('user').insert(user);

    await trx.commit();

    return response.json({
      user
    });
  }
}

export default UsersController;