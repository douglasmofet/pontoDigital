import 'reflect-metadata';
import { Request, Response } from 'express';
import { container } from 'tsyringe';

import GetUserService from '../modules/users/services/GetUserService';
import IAuthDTO from '@modules/auth/dto/IAuthDTO';

class AuthController {
  public async execute(request: Request, response: Response): Promise<Response> {
    const {
      email,
      password,
    }: IAuthDTO = request.body;

    const getUser = container.resolve(GetUserService);

    try {
      const user = await getUser.execute({
        email,
        password
      });

      user.password = null;

      return response.json(user);

    } catch (error) {
      return response.status(error.statusCode).json(error);
    }
  }
}

export default AuthController;