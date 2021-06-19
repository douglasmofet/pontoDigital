import express from 'express';

import EntranceController from './controllers/EntranceController';
import UsersController from './controllers/UsersController';
import AuthController from './controllers/AuthController';

const routes = express.Router();
const entranceController = new EntranceController();
const usersController = new UsersController();
const authController = new AuthController();

routes.post('/users/create', usersController.create);
routes.post('/login', authController.execute);
routes.post('/entrance', entranceController.list);

export default routes;