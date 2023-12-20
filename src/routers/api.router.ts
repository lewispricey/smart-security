import express from "express";
import getHealthCheck from "../controllers/getHealthCheck.controller";
import getSecurity from "../controllers/getSecurity.controller";

const apiRouter = express.Router();

apiRouter.get("/health-check", getHealthCheck);
apiRouter.get("/", getSecurity);

export default apiRouter;
