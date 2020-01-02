import { prisma } from '../generated/prisma-client';
import faker from 'faker'
import { cities as citiesJson } from './cities.json'

let citiesJsonSnippet = citiesJson;
citiesJsonSnippet.length = 25

const cities = citiesJsonSnippet.map((city) => {
  return {
    name: city.city,
    description: faker.lorem.sentences(2),
    jobs: [...Array(3)].map(() => {
      return {
        name: `${faker.company.bsAdjective()} ${faker.company.bsNoun()}`,
        company: faker.company.companyName(),
        description: faker.lorem.sentences(2),
        salary: faker.random.number({
          max: 200000,
          min: 20000,
          precision: 1,
        })
      }
    })
  }
})

const seedDatabase = async () => {
  for (const city of cities) {
    const dbCity = await prisma.createCity({
      name: city.name,
      description: city.description
    })
    for (const job of city.jobs) {
      const dbJob = await prisma.createJob({
        name: job.name,
        description: job.description,
        company: job.company,
        salary: job.salary,
        city: {
          connect: {
            id: dbCity.id
          }
        }
      })
    }
  }
}
seedDatabase();

// console.log(cities[0])
