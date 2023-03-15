import express, { Request, Response, NextFunction } from "express";
import API from "./api/api";
const app: express.Application = express();
const port: number = 3001;

app.use(express.json());
app.use("/api", API);

app.listen(process.env.PORT || port, () => {
  console.log(`listening on port: ${port}`);
});
