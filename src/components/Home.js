import React from 'react'
import {Link} from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <Link to='/counter'>Counter</Link>
        <br />  
        <Link to='/form'>Form</Link>
    </div>
  )
}

export default Home