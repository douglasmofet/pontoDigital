import "reflect-metadata";
import { container } from 'tsyringe';
import AppError from "../../../shared/errors/AppError";

import EntranceRepository from '../repositories/EntranceRepository';

class GetEntranceYearsService {
  public async execute(userId: number): Promise<number[]> {

    const entranceRepository = container.resolve(EntranceRepository);

    let firstYear = await entranceRepository.getFirstYearByUser(userId);

    const actualYear = new Date().getFullYear();

    if (firstYear)
      firstYear = new Date(firstYear.date).getFullYear();
    else
      firstYear = actualYear;

    let yearsCount = actualYear - firstYear;
    let years: number[] = [];

    if (yearsCount) {
      for (let index = 0; index < yearsCount; index++) {
        const element = firstYear + 1;
        years = [...years, element];
      }
    } else {
      years = [...years, actualYear];
    }

    return years;
  }
}

export default GetEntranceYearsService;