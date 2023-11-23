import React, { useState } from 'react'
import axios from 'axios'
import CopyURL from './CopyURL'




const AddBooks = () => {


  const baseURL = 'https://backendbookstore-p5wh.onrender.com'


const [Data,setData] = useState({
  bookname:"",
  author: "",
  description:"",
  image:"",
  price:"",

})

const change = (e) =>{
  const {name, value} = e.target;
  setData({...Data, [name]: value });
}

const submit = async (e)=>{
  e.preventDefault();
  await axios
  .post(`${baseURL}/api/v1/add`, Data)
  .then((res)=>{ console.log(res)});
  setData({
    bookname:"",
    author: "",
    description:"",
    image:"",
    price:"",
  }) 
}
console.log(Data);

  return (

    <div className='bg-dark d-flex justify-content-center align-items-center' style={{minHeight:'91.5vh', color:'white',display:'flex' }}>

<div className='container p-4'>
<div className="mb-3 container">
  <label 
  for="exampleFormControlInput1" className="form-label">
    Book Name
  </label>

  <input 
  type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Book Name"
  name='bookname'
  value={Data.bookname}
  onChange={change}/>
</div>


<div className="mb-3 container">
  <label 
  for="exampleFormControlInput1" className="form-label">Author Name</label>
  <input
   type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Author Name"
   name='author'
   value={Data.author}
   onChange={change}/>
</div>

<div className="mb-3 container">


  <label 
  for="exampleFormControlInput1" className="form-label">Description</label>

  <input 
  type="text" className="form-control" id="exampleFormControlInput1" placeholder="Enter Description"
  name='description'
  value={Data.description}
  onChange={change} />
</div>



<div className="mb-3 container" >
 


  <label 
  for="exampleFormControlInput1" className="form-label" style={{color:"yellow"}}>URL of book-image (Copy image address from @Google OR copy below URL to upload image) 
  </label>

  <CopyURL/>

  <input 
  type="text" className="form-control" id="exampleFormControlInput1" placeholder="Paste here image URL https://" 
  name='image'
  value={Data.image}
  onChange={change}/>
</div>

<div className="mb-3 container">
  <label 
  for="exampleFormControlInput1" className="form-label">Price</label>
  <input 
  type="number" className="form-control" id="exampleFormControlInput1" placeholder="Enter Price"
  name='price'
  value={Data.price}
  onChange={change}/>
</div>

     <button className='btn btn-success ' style={{marginLeft:'13px'}} onClick={submit}>Submit</button>
</div>
    </div>
  )
}
export default AddBooks