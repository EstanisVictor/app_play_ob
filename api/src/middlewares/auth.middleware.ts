import type { NextFunction, Request, Response } from "express";
import { UnauthorizedError } from "../helpers/api-erros";
import { UserRepository } from "../repositories/user.repository";
import jwt from "jsonwebtoken";

type JwtPayload = {
  id: number;
};

export const AuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { authorization } = req.headers;

  if (!authorization) {
    throw new UnauthorizedError("Token não fornecido");
  }

  const token = authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET ?? "") as JwtPayload;
  const user = await UserRepository.findOneBy({ id: decoded.id });

  if (!user) {
    throw new UnauthorizedError("Token inválido");
  }

  const { password: _, ...profile } = user;

  req.user = profile;
  next();
};
