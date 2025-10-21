import { Router } from 'express';
import {
    controllerGetUserbyId, 
    controllerGetUserAll, 
    controllerCreateUser, 
    //controllerUpdateUser,
    //controllerDeleteUser
} from '../controllers/userControllers.js';

const userRoutes = Router();

userRoutes.get('/:id', controllerGetUserbyId);
userRoutes.get('/', controllerGetUserAll);
userRoutes.post('/user', controllerCreateUser);
//userRoutes.put('/users/:id', controllerUpdateUser);
//userRoutes.delete('/users/:id', controllerDeleteUser);

export default userRoutes;

