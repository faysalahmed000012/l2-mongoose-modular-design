import config from '../../config';
import { AcademicSemester } from '../academicSemister/academicSemester.model';
import { TStudent } from '../student/student.interface';
import { Student } from '../student/student.model';
import { TUser } from './user.interface';
import { User } from './user.model';
import generateSTudentId from './user.utils';

const createStudent = async (password: string, student: TStudent) => {
  // create a user object
  const user: Partial<TUser> = {};
  // if password is not given, use default
  user.password = password || (config.default_password as string);
  user.role = 'student';

  const admissionSemester = await AcademicSemester.findById(
    student.admissionSemester,
  );

  user.id = await generateSTudentId(admissionSemester as any);
  const newUser = await User.create(user);

  // create a student
  if (Object.keys(newUser).length) {
    // set id, _id as user
    student.id = newUser.id;
    student.user = newUser._id;

    const newStudent = await Student.create(student);
    return newStudent;
  }
};

export const UserService = {
  createStudent,
};
