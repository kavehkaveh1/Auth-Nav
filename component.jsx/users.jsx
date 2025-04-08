import React from 'react'
import { useSearchParams} from 'react-router-dom'
function Users() {
    const[searchParams,SetsearchParams]= useSearchParams()
    const ShowActiveUsers=searchParams.get('filter')==='active'
  return (
    <div>
        <h1>user1</h1>
        <h1>user2</h1>
        <h1>user3</h1>
       <div>
        <button onClick={()=>SetsearchParams({ filter:'active'})}>active users</button>
        <button onClick={()=>SetsearchParams({})} >reset filter</button>
       </div>
       {
        ShowActiveUsers?<h2>showing active user</h2>: <h2>showing all users</h2>
       }
    </div>
  )
}

export default Users