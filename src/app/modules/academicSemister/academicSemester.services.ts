import { TAcademicSemester } from './academicSemester.interface';
import { AcademicSemester } from './academicSemester.model';

const createAcademicSemester = async (payload: TAcademicSemester) => {
  type TAcademicSemesterNameCodeMapper = {
    [key: string]: string;
  };

  const academicSemesterNameCodeMapper: TAcademicSemesterNameCodeMapper = {
    Autumn: '01',
    Summer: '02',
    Fall: '03',
  };

  if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
    throw new Error('Invalid Semester Code');
  }

  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllSemesters = async () => {
  const result = await AcademicSemester.find().lean();
  return result;
};

const getSemesterById = async (id: string) => {
  const result = await AcademicSemester.findOne({ _id: id });
  return result;
};

export const AcademicSemesterServices = {
  createAcademicSemester,
  getAllSemesters,
  getSemesterById,
};
