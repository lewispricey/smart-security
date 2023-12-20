import { Controller } from "./controller.types";
import users from "../db/users.data";
import zones from "../db/zones.data";

const getSecurity: Controller = (_, response) => {
  const securityDetails = { zones, users };
  response.status(200).send(securityDetails);
};

export default getSecurity;
