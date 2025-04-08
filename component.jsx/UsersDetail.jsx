import React from 'react'
import { useParams } from 'react-router-dom'
function UsersDetail() {
    const params = useParams()
    const userId= params.userId
  return (
    <div>Detail about user {userId}</div>
  )
}

export default UsersDetail