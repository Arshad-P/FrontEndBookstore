
// NOTE: in this file created Book details & size, Img
// this BooksSection.jsx file sending to Books.jsx file

import React from 'react'

const BooksSection = ({data}) => {

  
  return (
    <div className='d-flex justify-content-around align-items-center flex-wrap my-3'>
       
       {data && data.map((item, index)=>(
       <div className=''
        style={{
          width:'250px',
           height:'435px', backgroundColor:'transparent',
           border:'1px solid white',
           borderRadius:'15px',
           marginTop:'15px'
           }}> 

       <div>
        <img style={{
          width:'250px',
          height:'270px', borderRadius:'15px'}} className='img-fluid'
          src={item.image} alt='/'/>
       </div>
   ~
   <div style={{}}>
       <h6 className='text-white px-2 my-1'>
        BookName : {item.bookname.slice(0,20)}...
       </h6>

       <h6 style={{color:'green'}} className=' px-2 my-1'>
        Author : {item.author.slice(0,15)}...
       </h6>

       <h6 style={{color:'red'}} className=' px-2 my-1'>
        Description : {item.author.slice(0,10)}...
       </h6>
  </div>
       <b style={{fontSize:'25px',color:'orange'}} className='m-0 px-2 ' >RS. {item.price}</b>

       </div>
       ))}
    </div>
  )
}

export default BooksSection