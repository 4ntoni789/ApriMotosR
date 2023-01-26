import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from "@fortawesome/free-solid-svg-icons"
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
  return (
    <themeContext.Provider value={moto}>
      <nav className='contNavegacion'>
        <div className='contA'>
          <NavLink to="grupos" className={({ isActive }) => (isActive ? "active" : "")}>GRUPOS</NavLink>
        </div>
        <div className='contA'>
          <NavLink to="/">INICIO</NavLink>
        </div>
        <div className='contA'>
          <a href='#' onMouseEnter={() => MostrarSubNav()} onMouseOut={() => DesSubNav()}
          >NUESTROS MODELOS <FontAwesomeIcon icon={faArrowDown} />
          </a>
          {/* Barra de navegacion2 */}
          {mostrarNav == true ?
            <div className='subNav subNav2' onMouseOut={() => DesSubNav()} key={mostrarNav} >
              {moto.map((m) => {
                return (<NavLink key={m.key} onMouseEnter={() => MostrarSubNav()}
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
          <a href='#'>DISTRIBUIDORES</a>
        </div>
        <div className='contA'>
          <a href='#'>POSTVENTA</a>
        </div>
        <div className='contA'>
          <a href='#'>Blog</a>
        </div>
      </nav>
    </themeContext.Provider>
  );
}

export default Nav;