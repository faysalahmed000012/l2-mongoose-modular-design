import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '.env') });

export default {
  port: process.env.PORT,
  db_uri: process.env.MONGO_URI,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS,
  default_password: process.env.DEFAULT_PASS,
};
