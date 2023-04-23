import express, { Request, Response } from 'express';
const app: express.Application = express();

app.get('/kakao', (req: Request, res: Response) => {
  res.send('');
});

export default app;
