import { Router } from 'express';

import { CitiesController, UsersControllers } from './../controllers';
import { ensureAuthenticated } from '../shared/middleware';



const router = Router();



router.get('/', (_, res) => {
  return res.send('Olá, DEV!');
});

router.get('/cities', ensureAuthenticated, CitiesController.getAllValidation, CitiesController.getAll);
router.post('/cities', ensureAuthenticated, CitiesController.createValidation, CitiesController.create);
router.get('/cities/:id', ensureAuthenticated, CitiesController.getByIdValidation, CitiesController.getById);
router.put('/cities/:id', ensureAuthenticated, CitiesController.updateByIdValidation, CitiesController.updateById);
router.delete('/cities/:id', ensureAuthenticated, CitiesController.deleteByIdValidation, CitiesController.deleteById);

router.post('/login_in', UsersControllers.signInValidation, UsersControllers.signIn);
router.post('/sign_up', UsersControllers.signUpValidation, UsersControllers.signUp);



export { router };
