import express from 'express';
import { StudentControllers } from './student.controler';

const router = express.Router();

router.post('/create-student', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:id', StudentControllers.getAStudent);

export const StudentRoutes = router;
