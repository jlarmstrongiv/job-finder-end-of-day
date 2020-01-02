import gql from 'graphql-tag';

export const TOP_THREE_JOBS = gql`
  query topThreeJobs {
    topJobs(number: 3) {
      id
      name
      description
      company
    }
  }
`;

export const CITIES_META = gql`
  query citiesMeta {
    cities {
      id
      name
      description
    }
  }
`

export const CITIES_WITH_JOBS = gql`
query cityWithJobs($id: ID!) {
  city(where: {
    id: $id
  }) {
    id
    name
    description
    jobs {
      id
      name
      company
      formattedSalary
    }
  }
}
`
