import { getRepository } from "typeorm"
import { CourseUnit } from "../model/CourseUnit"

interface UserId {
  id?: string;
}

class GetCoursesUnitsService {
  public async execute({ id }: UserId) {

    const courseUnitRepository = getRepository(CourseUnit)

    const coursesUnits = courseUnitRepository.find()

    if (!coursesUnits) {
      return {
        message: 'Courses Units not found'
      }
    }

    return coursesUnits;

  }
}

export { GetCoursesUnitsService }