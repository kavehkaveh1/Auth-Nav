import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import '../css/Slink.css'
function Products() {
  return (
    <div>
      <nav>
        <Link to='harchi1'>harch1</Link><br/>
        <Link to='harchi2'>harch2</Link>
      </nav>
      <Outlet/>
    </div>
  )
}

export default Products