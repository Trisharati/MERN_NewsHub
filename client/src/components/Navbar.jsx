import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {

    const username = localStorage.getItem('username')

  return (
    <div>

<nav className="navbar navbar-expand-lg navbar-dark"
style={{backgroundColor:'#F0EB69'}}>
  
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      
      <li className="nav-item">
        <Link className="nav-link items" to="/dashboard" style={{color:'black'}}>News Hub</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/switchinterest" style={{color:'black'}}>Switch Interest</Link>
      </li>
      <li className="nav-item active">
        <Link className="nav-link" to="/mycollection" style={{color:'black'}}>My Collection</Link>
      </li>
      </ul>
      </div>
      <div className='dropdown'>
      <a className="nav-link dropdown-toggle" id="userDropdown" role="button"
                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          {username}</a>
    <div className="dropdown-menu">
      <Link className="dropdown-item" to='/first'>Logout</Link> 
    </div>
</div>

</nav>
      

    </div>
  )
}

export default Navbar