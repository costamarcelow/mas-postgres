import { Request, Response } from 'express'
import { CreateUserService } from '../services/CreateUserService'
import { GetUserService } from '../services/GetUserService'

class UserController {
  async create(request: Request, response: Response) {
    const userData = request.body
    const createUser = new CreateUserService()
    const user = await createUser.execute(userData)
    return response.json(user)
  }

  async show(request: Request, response: Response) {

    const userId = request.body.user;

    const getUserService = new GetUserService();

    const User = await getUserService.execute(userId);
    return response.json(User);
  }
}
export { UserController }
