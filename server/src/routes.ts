import express from 'express';

import EntranceController from './controllers/EntranceController';
import UsersController from './controllers/UsersController';
import AuthController from './controllers/AuthController';

const routes = express.Router();
const entranceController = new EntranceController();
const usersController = new UsersController();
const authController = new AuthController();

routes.post('/login', authController.execute);
routes.post('/users/create', usersController.create);

routes.post('/entrances', entranceController.list);
routes.get('/entrance/getYears', entranceController.getYears);
routes.get('/entrance/list', entranceController.list);
routes.post('/entrance/create', entranceController.create);

export default routes;