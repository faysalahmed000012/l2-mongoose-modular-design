import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import { AcademicSemesterServices } from './academicSemester.services';

const createAcademicSemester: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemester(
    req.body,
  );

  res.status(201).json({
    success: true,
    message: 'Academic Semester has created successfully',
    data: result,
  });
});

const getAllSemesters: RequestHandler = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.getAllSemesters();
  res.status(200).json({
    success: true,
    message: 'Academic Semesters retrieved successfully',
    data: result,
  });
});

const getSemesterById: RequestHandler = catchAsync(async (req, res) => {
  const id = req.params.id;
  const result = await AcademicSemesterServices.getSemesterById(id);

  res.status(200).json({
    success: true,
    message: `Academic Semester with id ${id} has retrieved successfully`,
    data: result,
  });
});

export const AcademicSemesterControllers = {
  createAcademicSemester,
  getAllSemesters,
  getSemesterById,
};
