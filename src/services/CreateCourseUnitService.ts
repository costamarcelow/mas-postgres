import { getRepository } from 'typeorm'
import { CourseUnit } from '../model/CourseUnit'

interface CourseUnitData {
  name: string
  description: string
}

class CreateCourseUnitService {
  public async execute(data: CourseUnitData) {
    const { name, description } = data

    const courseUnitRepository = getRepository(CourseUnit)

    const checkUserExists = await courseUnitRepository.findOne({ name })

    if (checkUserExists) {
      return {
        Error: 'Course Unit already exist'
      }
    }
    const courseUnit = courseUnitRepository.create({
      name,
      description
    })

    await courseUnitRepository.save(courseUnit)

    return courseUnit
  }
}

export { CreateCourseUnitService }
