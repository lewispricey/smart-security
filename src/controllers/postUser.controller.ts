import users, { User } from "../db/users.data";
import { Controller } from "./controller.types";

const postUser: Controller = (request, response, next) => {
  const { name, accessCode } = request.body;

  if (!name || !accessCode) {
    next({ msg: "Name and access code are required", status: 400 });
    return;
  }

  const user: User = { name, accessCode };
  users.push(user);
  response.status(201).send(user);
};

export default postUser;
