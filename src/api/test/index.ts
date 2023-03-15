import express, { Request, Response, NextFunction } from "express";

const app: express.Application = express();

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "pet server test!!!" });
});

export default app;
