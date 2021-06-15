import express from 'express';

import EntranceController from './controllers/EntranceController';
import UsersController from './controllers/UsersController';

const routes = express.Router();
const entranceController = new EntranceController();
const usersController = new UsersController();

routes.post('/users', usersController.create);
routes.post('/entrance', entranceController.list);

export default routes;