import { Controller } from "./controller.types";

const getHealthCheck: Controller = (request, response, next) => {
  response.status(200).send({ msg: "OK" });
};

export default getHealthCheck;
