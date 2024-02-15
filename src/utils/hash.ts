import crypto from 'crypto';

// TODO:move it to env (JUST for testing)
const salt = 'f844b09ff50c';

export class Hash {
  constructor() {}

  hashPassword(password: string) {
    return crypto.createHmac('sha512', salt).update(password).digest('hex');
  }

  compareHashPassword(password: string, hashedPassword: string) {
    return this.hashPassword(password) === hashedPassword;
  }
}

export default new Hash();
