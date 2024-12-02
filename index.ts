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

app.get("/branch", async (req: Request, res: Response): Promise<any> => {
  try {
    const branches = await prisma.branch.findMany({
      where: req.query,
    });

    res.status(200).send({
      message: "GET ALL BRANCH",
      success: true,
      result: branches,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "GET BRACH ERROR",
      success: false,
    });
  }
});

app.post("/branch", async (req: Request, res: Response): Promise<any> => {
  try {
    const branches = await prisma.branch.create({ data: req.body });

    res.status(200).send({
      message: "ADD ALL BRANCH",
      success: true,
      result: branches,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "ADD BRACH ERROR",
      success: false,
    });
  }
});

app.patch("/branch/:id", async (req: Request, res: Response): Promise<any> => {
  try {
    const branches = await prisma.branch.update({
      data: req.body,
      where: {
        id: parseInt(req.params.id),
      },
    });

    res.status(200).send({
      message: "UPDATE ALL BRANCH",
      success: true,
      result: branches,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      message: "UPDATE BRACH ERROR",
      success: false,
    });
  }
});

app.listen(PORT, () => {
  console.log("API RUNNING", PORT);
});
