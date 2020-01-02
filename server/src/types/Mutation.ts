import { prismaObjectType } from 'nexus-prisma';

const Mutation = prismaObjectType({
  name: 'Mutation',
  definition: t =>
    t.prismaFields({
      filter: [
        'deleteManyApplicants',
        'deleteManyCities',
        'deleteManyJobs',
        'updateManyApplicants',
        'updateManyCities',
        'updateManyJobs'
      ]
    }),
});

export default Mutation;
