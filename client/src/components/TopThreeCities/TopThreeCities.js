import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { useTopThreeJobsQuery } from 'generated/apollo-components';

const TopThreeCities = () => {
  const { data, loading, error } = useTopThreeJobsQuery();

  if (loading) return 'Loading…'
  if (error) return 'Error…'

  return (
    <ListGroup>
      {data.topJobs.map(job => (
        <ListGroup.Item key={job.id}>{job.name}</ListGroup.Item>
      ))}
    </ListGroup>
  )
}

export default TopThreeCities
