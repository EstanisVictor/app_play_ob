import type { Request, Response } from "express";
import { UserRepository } from "../repositories/user.repository";
import { BadRequestError } from "../helpers/api-erros";
import bcrypt from "bcrypt";

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
}
