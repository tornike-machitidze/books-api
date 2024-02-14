/* eslint-disable prettier/prettier */
import jwt from 'jsonwebtoken';

import { getRepository } from '../../database';
import { UserEntity } from './user.entity';
import { RegisterUserInterface } from './user.interface';
import hash from '../../utils/hash';

export class UserService {
  constructor() {}

  async userExists(email: string) {
    return !!(await getRepository(UserEntity).findOne({ where: { email } }));
  }

  async createUser(registerInfo: RegisterUserInterface): Promise<boolean> {
    const { email, password } = registerInfo;

    const hashed = hash.hashPassword(password);

    await getRepository(UserEntity).save({ email, password: hashed, refreshToken: '' });

    return true;
  }

  async registerUser(registerInfo: RegisterUserInterface): Promise<boolean> {
    if (await this.userExists(registerInfo.email)) {
      throw new Error('User exists');
    }

    await this.createUser(registerInfo);
    return true;
  }

  async loginUser(email: string, password: string): Promise<string | false> {
    const user = await getRepository(UserEntity).findOne({ where: { email } });
    if (user && hash.compareHashPassword(password, user.password)) {
      const token = jwt.sign({ email }, process.env.JWT_SECRET_OR_KEY!, { expiresIn: '2h' });

      return token;
    }
    return false;
  }
}

export default new UserService();
