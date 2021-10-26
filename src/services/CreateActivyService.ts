import { getRepository } from 'typeorm'
import { Activy } from '../model/Activy'

interface ActivyData {
  name: string
  activy_date: string
  grade: number
  course_unit_id: string
}

class CreateActivyService {
  async execute({ name, activy_date, grade, course_unit_id }: ActivyData) {
    const activyRepository = getRepository(Activy)

    const activy = activyRepository.create({
      name,
      activy_date,
      grade,
      course_unit_id
    })

    await activyRepository.save(activy)

    return Activy
  }
}

export { CreateActivyService }
