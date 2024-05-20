import { TStudent } from './student.interface';
import { Student } from './student.model';

const createStudent = async (student: TStudent) => {
  // const result = await StudentModel.create(student);  // built in static method

  // built in instance method
  const student1 = new Student(student);

  if (await student1.isUserExists(student.id)) {
    throw new Error('User already Exists!');
  }

  const result = await student1.save();
  return result;
};

const getAllStudents = async () => {
  const response = await Student.find().lean();
  return response;
};
const getAStudent = async (id: string) => {
  const response = await Student.findOne({ id }).lean();
  return response;
};

export const StudentServices = {
  createStudent,
  getAllStudents,
  getAStudent,
};
