import express from "express";
import getHealthCheck from "../controllers/getHealthCheck.controller";

const apiRouter = express.Router();

apiRouter.get("/health-check", getHealthCheck);

export default apiRouter;
