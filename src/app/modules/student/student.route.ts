import express from 'express';
import { StudentControllers } from './student.controller';

const router = express.Router();

router.post('/create-student', StudentControllers.createStudent);
router.get('/', StudentControllers.getAllStudents);
router.get('/:id', StudentControllers.getAStudent);
router.delete('/:id', StudentControllers.deleteStudent);

export const StudentRoutes = router;
