import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import { useCityWithJobsQuery } from 'generated/apollo-components'
import { useParams, Link } from 'react-router-dom'

const City = () => {
  const params = useParams()
  const { data, loading, error } = useCityWithJobsQuery({
    variables: {
      id: params.id
    }
  })

  if (loading) return 'Loading…'
  if (error) return 'Error…'

  const { name, description, jobs } = data.city

  return (
    <div>
      <Link to="/cities">Back to Cities</Link>
      <br />
      {name}
      <br />
      {description}
      <br />
      <img src={`https://source.unsplash.com/800x400/?${name}`} />
      <br />
      <ListGroup>
        {jobs.map(job => (
          <ListGroup.Item key={job.id}>{job.name}</ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  )
}

export default City;
