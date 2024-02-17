
import React from 'react'

function Profile() {
    let arr=[
        {step:"Complete Profile",
    btn:"Complete"},
        {step:"Step 1",
    btn:"Complete"},
        {step:"Step 2",
    btn:"Complete"},
        {step:"Step 3",
    btn:"Complete"},
        {step:"Step 4",
    btn:"Complete"},
        {step:"Step 5",
    btn:"Complete"},
]
  return (
 
    <div className='profile'>

        {
            arr.map((val,i)=>{
                return(
                    <div key={i}>
                    <div className='profile-box'>
                        <input type='checkbox'/>
                        <label style={{fontWeight:"bold",marginLeft:'50px'}}>{val.step}</label>
                    </div>
                    <button className=' profile-btn'>{val.btn}</button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Profile