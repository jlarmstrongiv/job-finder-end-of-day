import Query from './Query';
import Mutation from './Mutation';
import City from './City'
import Job, { topJobs } from './Job'
import Applicant from './Applicant'

const types = [
  Query,
  Mutation,
  City,
  Job,
  Applicant,
  topJobs
];

export default types;
