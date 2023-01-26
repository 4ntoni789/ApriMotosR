import React from 'react';
import { useNavigate } from 'react-router-dom';
import "../estilos/header.css"
import Nav from './Nav';

function Header(props) {
  const navigate = useNavigate();
    const MandarHome = ()=>{navigate("/")}

  return (
    <header className='encabe'>
      <div className='contLogo'>
        <img className='logo' onClick={()=>MandarHome()} src={require('../img/ApriliaWhite.png')}/>
      </div>
      <Nav/>
    </header>
  );
}

export default Header;