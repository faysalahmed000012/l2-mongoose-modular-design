import { Request, Response } from 'express';

import catchAsync from '../../utils/catchAsync';
import { StudentServices } from './student.services';

const getAllStudents = catchAsync(async (req: Request, res: Response) => {
  const result = await StudentServices.getAllStudents();

  res.status(200).json({
    success: true,
    message: 'Students are retrieved successfully',
    data: result,
  });
});

const getAStudent = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await StudentServices.getAStudent(id);

  res.status(200).json({
    success: true,
    message: 'Student data retrieved successfully',
    data: result,
  });
});

const deleteStudent = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await StudentServices.deleteAStudent(id);
  res.status(200).json({
    success: true,
    message: 'Student is Deleted Successfully',
    data: result,
  });
});

export const StudentControllers = {
  getAllStudents,
  getAStudent,
  deleteStudent,
};
