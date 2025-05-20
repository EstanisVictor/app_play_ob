import type { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import { BadRequestError, UnauthorizedError } from "../helpers/api-erros";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class UserController {
  async create(req: Request, res: Response) {
    const { name, email, password } = req.body;

    const userExists = await UserRepository.findOneBy({ email });

    if (userExists) {
      throw new BadRequestError("email já existe");
    }

    const hash = await bcrypt.hash(password, 10);

    const newUser = UserRepository.create({
      name,
      email,
      password: hash,
    });

    await UserRepository.save(newUser);

    const { password: _, ...user } = newUser;

    return res.status(201).json(user);
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    const user = await UserRepository.findOneBy({ email });

    if (!user) {
      throw new BadRequestError("email ou senha inválidos");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw new BadRequestError("email ou senha inválidos");
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET ?? "", {
      expiresIn: "2h",
    });

    return res.status(200).json({ token });
  }

  async getProfile(req: Request, res: Response) {
    return res.status(200).json(req.user);
  }
}
