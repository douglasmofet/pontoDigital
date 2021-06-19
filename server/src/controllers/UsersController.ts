import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateUserService from '../modules/users/services/CreateUserService';

import IEditUserDTO from '../modules/users/dtos/IEditUserDTO';

class UsersController {
  public async create(request: Request, response: Response): Promise<Response> {
    const {
      name,
      email,
      password,
    }: IEditUserDTO = request.body;

    const createUser = container.resolve(CreateUserService);

    try {
      const user = await createUser.execute({
        name,
        email,
        password
      });

      return response.json(user);

    } catch (error) {
      return response.status(error.statusCode).json(error);
    }
  }
}

export default UsersController;