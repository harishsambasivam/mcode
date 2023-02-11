import dotenv from "dotenv";
dotenv.config();

import express, { NextFunction, Request, Response } from "express";
import { UserRouter } from "./components/user/user.router";

export async function initApp(database: unknown) {
  const app = express();

  // middlewares
  app.use(express.json());

  // Routes
  app.use("/user", UserRouter(database));

  app.get("/", (req: Request, res: Response, next: NextFunction) => {
    res.status(200).send("ok");
  });

  return app;
}
