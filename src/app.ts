import express from "express";
import apiRouter from "./routers/api.router";

const app = express();

app.use("/api/security", apiRouter);

export default app;
