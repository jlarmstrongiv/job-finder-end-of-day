import React from 'react'
import { useCitiesMetaQuery } from 'generated/apollo-components'
import ListGroup from 'react-bootstrap/ListGroup'
import { Link } from 'react-router-dom'

const Cities = () => {
  const { data, loading, error } = useCitiesMetaQuery()

  if (loading) return 'Loading…'
  if (error) return 'Error…'

  return (
    <ListGroup>
      {data.cities.map(city => (
        <Link key={city.id} to={`/cities/${city.id}`}>
          <ListGroup.Item key={city.id}>{city.name}</ListGroup.Item>
        </Link>
      ))}
    </ListGroup>
  )
}

export default Cities
