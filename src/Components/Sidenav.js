
import React,{useState} from 'react';
//  import '../App.css';
import imagePath from '../Assets/Logo_Back1.jpg';
const Sidenav = () => {
  const [selectedLink, setSelectedLink] = useState(null);

  const handleLinkClick = (index) => {
    setSelectedLink(index);
  };

  return (
    <div className="sidenav">
      <div className="link link-img"> <img className='image_logo' src={imagePath} alt=""/></div>
    
       <div className={`link ${selectedLink === 0 ? 'active' : ''}`} onClick={() => handleLinkClick(0)}>
        <a href="/about">Market</a>
      </div>
      <div className={`link ${selectedLink === 1 ? 'active' : ''}`} onClick={() => handleLinkClick(1)}>
        <a href="/services">Setting</a>
      </div>
      <div className={`link ${selectedLink === 2 ? 'active' : ''}`} onClick={() => handleLinkClick(2)}>
        <a href="/contact">Cart</a>
      </div>
      <div className={`link ${selectedLink === 3 ? 'active' : ''}`} onClick={() => handleLinkClick(3)}>
        <a href="/contact">Logout</a>
      </div>
    </div>
  );
};

export default Sidenav;