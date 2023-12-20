import { NextFunction, Request, Response } from "express";

export type Controller = (
  request: Request,
  response: Response,
  next: NextFunction
) => void;
