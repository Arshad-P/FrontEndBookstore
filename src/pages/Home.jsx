
import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

const Home = () => {


  return (

<div className='Home-Page bg-dark text-white container-fluid d-flex justify-content-center align-items-center'> 
<div className="row container">

<div className="col-lg-6 d-flex justify-content-center align-items-start flex-column" style={{height:'75.5vh'}}>


<h2 style={{fontSize:'50px'}} >BOOK STORE </h2>
<h4 style={{fontSize:'40px'}}>FOR YOU</h4>
<p style={{color:'grey'}}>Checkout The Books From Here.</p>

<Link to='/books' className='viewBook my-3' >View Books</Link>
</div>

<div className="col-lg-6 d-flex justify-content-center align-items-center flex-column" style={{height:'91.5vh'}}>


  <h1 style={{fontSize:'70px'}}>Hi !!</h1>  <svg className='svg-fluid' xmlns="http://www.w3.org/2000/svg" width="70" height="75" fill="currentColor" class="bi bi-person-raised-hand" viewBox="0 0 16 16" >
  <path d="M6 6.207v9.043a.75.75 0 0 0 1.5 0V10.5a.5.5 0 0 1 1 0v4.75a.75.75 0 0 0 1.5 0v-8.5a.25.25 0 1 1 .5 0v2.5a.75.75 0 0 0 1.5 0V6.5a3 3 0 0 0-3-3H6.236a.998.998 0 0 1-.447-.106l-.33-.165A.83.83 0 0 1 5 2.488V.75a.75.75 0 0 0-1.5 0v2.083c0 .715.404 1.37 1.044 1.689L5.5 5c.32.32.5.754.5 1.207Z"/>
  <path d="M8 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"/>
</svg>

<p style={{fontSize:'30px',color:'green', marginTop:'30px'}} > # We are Trying to store User data  in MongoDB </p> 

</div>
</div>
</div>
  )
}
export default Home