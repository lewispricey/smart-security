import zones from "../db/zones.data";
import { Controller } from "./controller.types";

const deleteZone: Controller = (request, response, next) => {
  const { zoneName } = request.params;
  const zoneIndex = zones.findIndex((zone) => zone.name === zoneName);

  if (zoneIndex === -1) {
    next({
      msg: "Zone not found",
      status: 404,
    });
    return;
  }

  zones.splice(zoneIndex, 1);
  response.status(204).send();
};
export default deleteZone;
