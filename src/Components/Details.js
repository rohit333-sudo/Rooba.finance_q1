import React from 'react'
import Map from '../Assets/Why_invest_.jpg'
function Details() {
    let arr=[{
        heading:'Overview',desc:"Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love."
    },
{
    heading:'Why ?',desc:"Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love."
},
{
    heading:'What ?',desc:"Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love!Our AI feature simplifies your life by automating routine tasks. Spend more time on the things you love."
}]
  return (
    <div className='detail'>
        {
            arr.map((val,i)=>{
                return(<div key={i} style={{padding:'10px'}}>
                    <h2 className="heading">
                        {val.heading}
                    </h2>
                    <p className="paragraph">
                        {val.desc}
                    </p>
                    </div>
                )
            })
        }

<div style={{padding:'10px'}}>
                    <h2 className="heading">
                        Map
                    </h2> 
                   
                    <img style={{objectFit:'cover',    width:'447px',height:'266px'}} className='image' src={Map} alt=""/>
     </div>
    </div>
  )
}

export default Details