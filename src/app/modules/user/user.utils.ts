import { TAcademicSemester } from '../academicSemister/academicSemester.interface';
import { User } from './user.model';

const findLatestStudentId = async () => {
  const previousStudentId = await User.findOne(
    {
      role: 'student',
    },
    {
      id: 1,
      _id: 0,
    },
  )
    .sort({
      createdAt: -1,
    })
    .lean();
  return previousStudentId?.id ? previousStudentId.id.substring(6) : undefined;
};

const generateSTudentId = async (payload: TAcademicSemester) => {
  // first time 0000

  const currentId = (await findLatestStudentId()) || (0).toString();
  let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${payload.year}${payload.code}${incrementId}`;

  return incrementId;
};

export default generateSTudentId;
