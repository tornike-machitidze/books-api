import { Request, Response } from 'express';
import userService, { UserService } from './user.service';
import { RegisterUserInterface } from './user.interface';

export class UserController {
  readonly userService: UserService;

  constructor(userService: UserService) {
    this.userService = userService;
  }

  async registerUser(req: Request, res: Response) {
    const registrationData: RegisterUserInterface = req.body;
    try {
      const result: boolean = await this.userService.registerUser(registrationData);
      if (!result) return res.status(403).json({ error: 'Bad request' });

      res.status(201).json({ data: result });
    } catch (err: any) {
      if (err.message === 'User exists') return res.status(409).json({ error: 'User exists' });

      res.status(500).json({ error: 'Internal server error.' });
    }
  }

  async loginUser(req: Request, res: Response) {
    const { email, password }: RegisterUserInterface = req.body;
    try {
      const token: string | false = await this.userService.loginUser(email, password);
      if (!token) return res.status(401).json({ error: 'Unauthorized' });
      res.status(200).json({ data: token });
    } catch (err: any) {
      res.status(500).json({ error: 'Internal server error.' });
    }
  }
}

export default new UserController(userService);
