import { Student } from './student.interface';
import { StudentModel } from './student.model';

const createStudent = async (student: Student) => {
  const result = await StudentModel.create(student);
  return result;
};

const getAllStudents = async () => {
  const response = await StudentModel.find().lean();
  return response;
};
const getAStudent = async (id: string) => {
  const response = await StudentModel.findOne({ id }).lean();
  return response;
};

export const StudentServices = {
  createStudent,
  getAllStudents,
  getAStudent,
};
