import express, { Express, Request, Response } from 'express';

const app: Express = express();

app.get('/', (req: Request, res: Response) => {
  res.status(200).send('Hi there!');
})

app.listen(3000, () => console.log('Server is started on port ' + 3000));
