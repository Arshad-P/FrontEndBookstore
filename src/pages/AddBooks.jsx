import React, { useState } from 'react'
import axios from 'axios'

const AddBooks = () => {

  
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
  .post('http://localhost:2000/api/v1/add', Data)
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

<div className="mb-3 container">
  <label 
  for="exampleFormControlInput1" className="form-label" style={{color:"red"}}>URL of image @Google (Copy image address) 

  </label>
  <input 
  type="text" className="form-control" id="exampleFormControlInput1" placeholder="Paste any http:// image address " 
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