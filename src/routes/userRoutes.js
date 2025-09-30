import { Router } from 'express';
import {getUserById, getUserAll} from '../controllers/userControllers.js';

const userRoutes = Router();

userRoutes.get('/:id', getUserById);
userRoutes.get('/', getUserAll);
// userRoutes.post('/users', createUser);
// userRoutes.put('/users/:id', updateUser);
// userRoutes.delete('/users/:id', deleteUser);

export default userRoutes;

