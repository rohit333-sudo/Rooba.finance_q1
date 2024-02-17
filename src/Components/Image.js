import React from 'react'
import imagePath from '../Assets/unsplash_s2wjvuA_mFY.png';
import Breadcrumb from './Breadcrumb';
function Image() {
  return (
  
    <div>
        <Breadcrumb></Breadcrumb>
 <img style={{objectFit:'contain',height:'371px',}} className='image' src={imagePath} alt=""/>
    </div>
  )
}

export default Image