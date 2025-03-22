import { Router } from 'express';
import { body } from 'express-validator';
import * as projectController from '../controllers/project.controller.js';
import * as authMiidleware from '../middleware/auth.middleware.js';


const router = Router();

router.post('/create',
    authMiidleware.authUser,
    body('name').isString().withMessage('Name is required'),
    projectController.createProject

)


router.get('/all',
    authMiidleware.authUser,
    projectController.getAllProject
)

router.put('/add-user',
    authMiidleware.authUser,
    body('projectId').isString().withMessage('Project ID is required'),
    body('users').isArray({ min: 1 }).withMessage('Users must be an array of strings').bail()
        .custom((users) => users.every(user => typeof user === 'string')).withMessage('Each user must be a string'),
    projectController.addUserToProject
)

router.get('/get-project/:projectId',
    authMiidleware.authUser,
    projectController.getProjectById
)


export default router;


'2:42'