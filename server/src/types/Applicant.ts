import { prismaObjectType } from 'nexus-prisma';

const Applicant = prismaObjectType({
  name: 'Applicant',
  description: 'A generic Applicant example',
  definition(t) {
    t.prismaFields(['*']);
  },
});

export default Applicant;
