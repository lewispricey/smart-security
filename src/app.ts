import express from "express";
import apiRouter from "./routers/api.router";
import custom404 from "./errors/custom404.error";
import customError from "./errors/custom.error";

const app = express();

app.use(express.json());

app.use("/api/security", apiRouter);

app.use("*", custom404);

app.use(customError);

export default app;
