import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <div style={{borderBottom:"1px solid white"}}>
        <nav className="navbar navbar-expand-lg bg-dark">

  <div className="container">

    <div className='LogoContainer'>
    <Link className="navbar-brand text-white" href="#" to='/' > 
    <span className='book'>BOOK</span>
    <span className='store'>STORE</span></Link>
    </div>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" style={{backgroundColor:'grey', borderRadius:'5px'}}></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

    <Link className="nav-item nav-link active text-white" to="/">
          Home
    </Link>

    <Link className="nav-item nav-link active text-white" to="/addbooks">
          Add Books
    </Link>

    <Link className="nav-item nav-link active text-white" to="/books">
         Books Available
    </Link>


      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar