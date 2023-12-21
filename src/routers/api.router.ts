import express from "express";
import getHealthCheck from "../controllers/getHealthCheck.controller";
import getSecurity from "../controllers/getSecurity.controller";
import postZone from "../controllers/postZone.controller";
import patchZone from "../controllers/patchZone.controller";
import postUser from "../controllers/postUser.controller";
import patchUser from "../controllers/patchUser.controller";
import deleteUser from "../controllers/deleteUser.controller";

const apiRouter = express.Router();

apiRouter.get("/health-check", getHealthCheck);
apiRouter.post("/zone", postZone);
apiRouter.patch("/zone/:zoneName", patchZone);
apiRouter.post("/user", postUser);
apiRouter.patch("/user/:userName", patchUser);
apiRouter.delete("/user/:userName", deleteUser);
apiRouter.get("/", getSecurity);

export default apiRouter;
