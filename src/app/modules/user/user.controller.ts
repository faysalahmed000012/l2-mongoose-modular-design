import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import { UserService } from './user.services';

const createStudent: RequestHandler = catchAsync(async (req, res) => {
  const { password, student } = req.body;

  const result = await UserService.createStudent(password, student);

  res.status(201).json({
    success: true,
    message: 'Student has created successfully',
    data: result,
  });
});

export const UserControllers = {
  createStudent,
};
