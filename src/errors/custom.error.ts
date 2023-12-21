import { Request, Response, NextFunction } from "express";

type Error = {
  msg: string;
  status: number;
};

type CustomError = (
  error: Error,
  request: Request,
  response: Response,
  next: NextFunction
) => void;

const customError: CustomError = (error, _, response, next) => {
  response.status(error.status).send({ msg: error.msg });
};

export default customError;
