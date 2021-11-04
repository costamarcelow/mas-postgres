import { getRepository } from "typeorm"
import { Activy } from "../model/Activy"

interface UserId {
  id?: string;
}

class GetActiviesService {
  public async execute({ id }: UserId) {

    const activyRepository = getRepository(Activy)

    const activies = activyRepository.find();

    if (!activies) {
      return {
        massege: 'Activies not found'
      }
    }

    return activies;


  }
}

export { GetActiviesService }