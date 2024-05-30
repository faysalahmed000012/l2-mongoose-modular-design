import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { studentValidations } from '../student/student.zod.validation';
import { UserControllers } from './user.controller';

const router = Router();

router.post(
  '/create-student',
  validateRequest(studentValidations.createStudentValidationSchema),
  UserControllers.createStudent,
);

export const UserRoutes = router;
