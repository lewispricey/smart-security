import { Request, Response } from "express";

const custom404 = (_: Request, response: Response) => {
  response.status(404).send({ msg: "Invalid Path" });
};

export default custom404;
