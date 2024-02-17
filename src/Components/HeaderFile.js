import React from 'react'
import Button from './Button'
import Container from './Container'
import Image from './Image'
import Parksite from './Parksite'
import Profile from './Profile';
import Details from './Details';
function HeaderFile() {
  return (
 <div className='container'>  
   
  <div className='headers'>
      <div><Button></Button></div>
      <div className='icon'> <i className="fas fa-bell"></i>  </div>
</div>
<Container></Container>
<div className='container-2'>

<Image></Image>
      <Parksite></Parksite>
      <div className='container-3'>
        <Details></Details>
        <Profile></Profile>
      </div>
</div>
</div>
 
  )
}
export default HeaderFile