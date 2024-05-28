import { NextFunction, Request, Response, Router } from 'express';
import { UserControllers } from './user.controller';

const router = Router();

const shenaBahini = (name: string) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    console.log(`ami ekjon shoinik and amar nam ${name}`);
  };
};

router.post('/create-student', UserControllers.createStudent);

export const UserRoutes = router;
