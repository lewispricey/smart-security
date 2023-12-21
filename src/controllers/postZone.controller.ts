import zones, { Zone } from "../db/zones.data";
import { Controller } from "./controller.types";

const postZone: Controller = (request, response, next) => {
  const { name } = request.body;

  if (!name) {
    next({ msg: "Name is required", status: 400 });
    return;
  }

  const zone: Zone = { name, status: "disarmed" };
  zones.push(zone);
  response.status(201).send(zone);
};

export default postZone;
