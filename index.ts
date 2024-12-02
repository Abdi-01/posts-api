import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import cors from "cors";
dotenv.config(); // execute .env file access
import { prisma } from "./config/prisma";

const PORT = process.env.PORT;

const app: Application = express();
app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response): any => {
  return res.status(200).send("<h1>ORM API</h1>");
});

app.listen(PORT, () => {
  console.log("API RUNNING", PORT);
});
