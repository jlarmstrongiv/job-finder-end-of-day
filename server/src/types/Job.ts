import { prismaObjectType, prismaExtendType } from 'nexus-prisma';
import { intArg } from 'nexus';

const Job = prismaObjectType({
  name: 'Job',
  description: 'A generic Job example',
  definition(t) {
    t.prismaFields(['*']);
    t.field('formattedSalary', {
      type: 'String',
      resolve({ salary }) {
        return `$${salary.toLocaleString('en-US', { minimumFractionDigits: 2 })}`
      }
    })
  },
});

export const topJobs = prismaExtendType({
  type: 'Query',
  definition(t) {
    t.field('topJobs', {
      ...t.prismaType.jobs,
      args: {
        number: intArg({
          nullable: true,
          default: 5,
          description: 'Jobs by highest slary'
        })
      },
      async resolve(_, { number }, ctx) {
        return ctx.prisma.jobs({
          orderBy: "salary_DESC",
          first: number
        })
      }
    })
  }
})

export default Job;
