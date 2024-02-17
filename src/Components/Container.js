import React, {useState} from 'react'

function Container() {



    const [selectedItem, setSelectedItem] = useState(null);

    const handleItemClick = (index) => {
      setSelectedItem(index);
    };

    
  return (
    <div className='container-outer'>
<div><h1 style={{    marginLeft: '35px',
    marginTop: '10px'}}>Choose your new sites</h1></div>

<div className='conatiner-inner'>
     
      <ul className='horizontal-list'>
      <li className={selectedItem === 0 ? 'active' : ''} onClick={() => handleItemClick(0)}>1</li>
      <li className={selectedItem === 1 ? 'active' : ''} onClick={() => handleItemClick(1)}>2</li>
      <li className={selectedItem === 2 ? 'active' : ''} onClick={() => handleItemClick(2)}>3</li>
   
      </ul>
    </div>

    </div>
  )
}

export default Container