import express from "express";
import getHealthCheck from "../controllers/getHealthCheck.controller";
import getSecurity from "../controllers/getSecurity.controller";
import postZone from "../controllers/postZone.controller";
import patchZone from "../controllers/patchZone.controller";

const apiRouter = express.Router();

apiRouter.get("/health-check", getHealthCheck);
apiRouter.post("/zone", postZone);
apiRouter.patch("/zone/:zoneName", patchZone);
apiRouter.get("/", getSecurity);

export default apiRouter;
