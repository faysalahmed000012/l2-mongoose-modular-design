import { Request, Response } from 'express';
import studentValidationSchema from './student.joi.validation';
import { StudentServices } from './student.services';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student } = req.body;
    const { error } = studentValidationSchema.validate(student);

    if (error) {
      res.status(500).json({
        success: false,
        message: error.details[0].message,
        error: error.details,
      });
    }

    const result = await StudentServices.createStudent(student);

    res.status(201).json({
      success: true,
      message: 'Student has created successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
};

const getAllStudents = async (req: Request, res: Response) => {
  try {
    const result = await StudentServices.getAllStudents();

    res.status(200).json({
      success: true,
      message: 'Students are retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
};

const getAStudent = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await StudentServices.getAStudent(id);

    res.status(200).json({
      success: true,
      message: 'Student data retrieved successfully',
      data: result,
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message,
      data: error,
    });
  }
};

export const StudentControllers = {
  createStudent,
  getAllStudents,
  getAStudent,
};
