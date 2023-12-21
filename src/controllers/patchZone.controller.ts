import zones from "../db/zones.data";
import { Controller } from "./controller.types";
//refactor this to get the zone name from the params
const patchZone: Controller = (request, response, next) => {
  const { zoneName } = request.params;
  const { status } = request.body;

  // refactor to use next for error if status is missing or doesnt match the required values
  if (status !== "armed" && status !== "disarmed") {
    next({ msg: "Status is required", status: 400 });
    return;
  }

  const zone = zones.find((zone) => zone.name === zoneName);
  if (!zone) {
    next({ msg: "Zone not found", status: 404 });
    return;
  }
  zone.status = status;
  response.status(200).send(zone);
};

export default patchZone;
