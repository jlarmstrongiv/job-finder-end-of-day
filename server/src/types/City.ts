import { prismaObjectType } from 'nexus-prisma';

const City = prismaObjectType({
  name: 'City',
  description: 'A generic City example',
  definition(t) {
    t.prismaFields(['*']);
  },
});

export default City;
