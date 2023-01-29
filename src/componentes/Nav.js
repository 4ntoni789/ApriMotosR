import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown, faBars, faL } from "@fortawesome/free-solid-svg-icons"
import "../estilos/nav.css"
import { Link, NavLink } from 'react-router-dom';
import themeContext, { moto } from "../context/themeContext.js"

function Nav(props) {
  const [mostrarNav, setMostrarNav] = useState(false);
  const MostrarSubNav = () => {
    setMostrarNav(true)
  }

  const DesSubNav = () => {
    setMostrarNav(false)
  }
  const [mostrarNavRespon,setMostrarNavRespon] = useState(false)
  const MostrarNavRes = ()=>{
    if(mostrarNavRespon == false){
      setMostrarNavRespon(true);
    }else{
      setMostrarNavRespon(false);
    }
  };
  return (
    <themeContext.Provider value={moto}>
        <div className='contIcobar' onClick={MostrarNavRes}>
          <FontAwesomeIcon icon={faBars} />
        </div>
      <nav className={mostrarNavRespon == true ? "contNavegacion contNavegacion2":"contNavegacion"}>
        <div className='contA'>
          <NavLink to="grupos" onClick={MostrarNavRes} className={({ isActive }) => (isActive ? "active" : "")}>GRUPOS</NavLink>
        </div>
        <div className='contA'>
          <NavLink to="/" onClick={MostrarNavRes}>INICIO</NavLink>
        </div>
        <div className='contA'>
          <a href='#' onMouseEnter={() => MostrarSubNav()} onMouseOut={() => DesSubNav()}
          >NUESTROS MODELOS <FontAwesomeIcon icon={faArrowDown}  />
          </a>
          {/* Barra de navegacion2 */}
          {mostrarNav == true ?
            <div className='subNav subNav2' onMouseOut={() => DesSubNav()} key={mostrarNav} >
              {moto.map((m) => {
                return (<NavLink key={m.key} onClick={MostrarNavRes} onMouseEnter={() => MostrarSubNav()}
                  className={({ isActive }) => (isActive ? "active2" : "")} to={m.name}>
                  {m.name}
                </NavLink>)
              })}
            </div> :
            <div className='subNav subNav3' key={mostrarNav}>
              {moto.map((m) => {
                <NavLink key={m.key} to={m.name}>{m.name}</NavLink>
              })}
            </div>}
          {/* Barra de navegacion2 */}
        </div>
        <div className='contA'>
          <a href='#' onClick={MostrarNavRes}>DISTRIBUIDORES</a>
        </div>
        <div className='contA'>
          <a href='#' onClick={MostrarNavRes}>POSTVENTA</a>
        </div>
        <div className='contA'>
          <a href='#' onClick={MostrarNavRes}>Blog</a>
        </div>
      </nav>
    </themeContext.Provider>
  );
}

export default Nav;