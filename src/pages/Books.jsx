
// ------------ Books Loading section... ---------
// BooksSection.jsx file has imported and accessed.
// Render website connecting from here



import React, { useEffect, useState} from 'react'
import axios from 'axios'
import BooksSection from '../components/BooksSection';


const Books = () => {

// Render website URL link has used for Backend Access.
  const baseURL = 'https://backendbookstore-p5wh.onrender.com'

const [Data,setData] = useState();
useEffect(()=>{

  const fetch = async ()=>{

    await axios.get(`${baseURL}/api/v1/getBooks`).then((res)=>
       setData(res.data.books))
  };
  fetch();
},[]);

  return (
    <div className='bg-dark' style={{minHeight:'91.5vh', color:'white'}}>
    <div >
      <h4 className='text-white'>Books Section</h4>
    </div>

 

    {Data ? (
    <BooksSection data={Data}/>) : (<div className='text-white'>Loading...</div>)}
    </div>
  )
}
export default Books