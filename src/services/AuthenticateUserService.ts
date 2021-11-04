import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { request } from "express";
import { getRepository } from "typeorm"
import { User } from "../model/User"
import authConfig from "../config/auth";

interface AuthData {
  email: string
  password: string
}

class AuthenticateUserService {
  public async execute(data: AuthData): Promise<String | {}> {

    const { email, password } = data

    const usersRepository = getRepository(User)

    const user = await usersRepository.findOne({ email });

    if (!user) {
      return {
        Error: "User not found"
      }
    }

    const comparePassword = compare(password, user.password)

    if (!comparePassword) {
      return {
        Error: "Incorrect Password"
      }
    }

    const { secret, expiresIn } = authConfig.jwt

    const token = sign({ "role": "user" }, secret, {
      subject: user.id,
      expiresIn
    })

    return token;
  }
}

export { AuthenticateUserService }