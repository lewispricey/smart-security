import zones, { Zone } from "../db/zones.data";
import { Controller } from "./controller.types";

const postZone: Controller = (request, response) => {
  const { name } = request.body;
  const zone: Zone = { name, status: "disarmed" };
  zones.push(zone);
  response.status(201).send(zone);
};

export default postZone;
