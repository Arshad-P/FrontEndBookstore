
import React, { useEffect, useState} from 'react'
import axios from 'axios'
import BooksSection from '../components/BooksSection';


const Books = () => {

const [Data,setData] = useState();
useEffect(()=>{

  const fetch = async ()=>{

    await axios.get('http://localhost:2000/api/v1/getBooks').then((res)=>
       setData(res.data.books))
  };
  fetch();
},[]);

  return (
    <div className='bg-dark' style={{minHeight:'91.5vh', color:'white'}}>
    <div >
      <h4 className='text-white'>Books Section</h4>
    </div>

     {/* // now below Books.jsx file data sending to BooksSection.jsx file
        */}

    {Data ? (
    <BooksSection data={Data}/>) : (<div className='text-white'>Loading...</div>)}
    </div>
  )
}
export default Books