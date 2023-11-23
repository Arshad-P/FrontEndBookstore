

import React, { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import './CopyURL.css'


const CopyURL = () => {

const [clipboardState, setClipboardState] = useState(false);

  return (
    <div>
        <CopyToClipboard text='https://rukminim2.flixcart.com/image/832/832/l2jcccw0/book/e/e/a/my-journey-original-imagduuehhjd3hgt.jpeg?q=70' onCopy={()=> setClipboardState(true)}>
        
           
           <div className='btnContainer'>
       
        <button className='btnClick'>Click here to copy image URL
            {clipboardState && (
                <span style={{color:'yellow', fontWeight:'bolder', marginLeft:'7px'}}>
                  Copied
                </span>
            )}{" "}
        </button>
 
        </div>
        </CopyToClipboard>

     
        
    </div>
  )
}

export default CopyURL