import { Student } from './student.model';

const getAllStudents = async () => {
  const response = await Student.find().lean();
  return response;
};
const getAStudent = async (id: string) => {
  const response = await Student.findOne({ id }).lean();
  return response;
};

const deleteAStudent = async (id: string) => {
  const response = await Student.updateOne({ id }, { isDeleted: true });
  return response;
};

export const StudentServices = {
  getAllStudents,
  getAStudent,
  deleteAStudent,
};
