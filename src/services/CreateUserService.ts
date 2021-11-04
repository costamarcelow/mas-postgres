import { hash } from 'bcryptjs'
import { getRepository } from 'typeorm'
import { User } from '../model/User'

interface UserData {
  name: string
  email: string
  password: string
}

class CreateUserService {
  public async execute(data: UserData) {
    const { name, email, password } = data
    const usersRepository = getRepository(User)
    const checkUserExist = await usersRepository.findOne({ email })

    if (checkUserExist) {
      return {
        error: 'Email adress already exist'
      }
    }
    const hashedPassword = await hash(password, 8)

    const user = usersRepository.create({
      name,
      email,
      password: hashedPassword
    })
    await usersRepository.save(user)
    return user;
  }
}

export { CreateUserService }
