import users from "../db/users.data";
import { Controller } from "./controller.types";

const deleteUser: Controller = (request, response, next) => {
  const { userName } = request.params;
  const userIndex = users.findIndex((user) => user.name === userName);

  if (userIndex === -1) {
    next({
      msg: "User not found",
      status: 404,
    });
    return;
  }

  users.splice(userIndex, 1);
  response.status(204).send();
};

export default deleteUser;
