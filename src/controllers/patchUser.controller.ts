import users from "../db/users.data";
import { Controller } from "./controller.types";

const patchUser: Controller = (request, response, next) => {
  const { userName } = request.params;
  const { accessCode } = request.body;

  if (!accessCode) {
    next({ msg: "Access code is required", status: 400 });
    return;
  }

  const user = users.find((user) => user.name === userName);

  if (!user) {
    next({ msg: "User not found", status: 404 });
    return;
  }

  user.accessCode = accessCode;
  response.status(200).send(user);
};

export default patchUser;
