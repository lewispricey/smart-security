import { Controller } from "./controller.types";
import endpoints from "../db/endpoints.data";

const getDocs: Controller = (_, response) => {
  response.status(200).send(endpoints);
};

export default getDocs;
