import express from "express";
import apiRouter from "./routers/api.router";
import custom404 from "./errors/custom404.error";

const app = express();

app.use("/api/security", apiRouter);

app.use("*", custom404);

export default app;
