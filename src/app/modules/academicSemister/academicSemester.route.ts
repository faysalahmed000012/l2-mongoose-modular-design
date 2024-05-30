import { Router } from 'express';
import validateRequest from '../../middlewares/validateRequests';
import { AcademicSemesterControllers } from './academicSemester.controllers';
import { AcademicSemesterValidations } from './academicSemester.zod.validation';

const router = Router();

router.post(
  '/create-semester',
  validateRequest(
    AcademicSemesterValidations.createAcademicSemesterValidationSchema,
  ),
  AcademicSemesterControllers.createAcademicSemester,
);

router.get('/', AcademicSemesterControllers.getAllSemesters);
router.get('/:id', AcademicSemesterControllers.getSemesterById);

export const AcademicSemesterRoutes = router;
