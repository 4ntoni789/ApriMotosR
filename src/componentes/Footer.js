import React from 'react';
import "../estilos/footer.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleLeft, faChevronCircleRight, faChevronRight } from "@fortawesome/free-solid-svg-icons"

function Footer(props) {
  return (
    <footer className='contFooter'>
      <div className='footApp'>
        <div className='somos'>
          <img className='logo' src={require('../img/ApriliaWhite.png')} />
          <p>Diseñamos tecnologías innovadoras, hermosas, eficientes, inteligentes y sostenibles para reinventar la movilidad para las generaciones futuras. Imaginamos cómo se moverá la gente en el futuro, para anticipar sus necesidades y aspiraciones.</p>
          <img className='icono' src={require('../img/face.png')} />
          <img className='icono' src={require('../img/inst.png')} />
        </div>
        <div className='footNavegacion'>
          <h4>NAVEGACIÓN</h4>
          <a href='#'><FontAwesomeIcon className='ico' icon={faChevronRight}/> NUESTROS MODELOS</a>
          <a href='#'><FontAwesomeIcon className='ico' icon={faChevronRight}/> ENCUENTRA UN DISTRIBUIDOR</a>
        </div>
        <div className='footSoporte footNavegacion'>
          <h4>CANALES DE SOPORTE</h4>
          <a href='#'><FontAwesomeIcon className='ico' icon={faChevronRight}/> POSTVENTA</a>
          <a href='#'><FontAwesomeIcon className='ico' icon={faChevronRight}/> POLÍTICA DE PRIVACIDAD</a>
          <a href='#'><FontAwesomeIcon className='ico' icon={faChevronRight}/> PQRS</a>
          <a href='#'><FontAwesomeIcon className='ico' icon={faChevronRight}/> OAL</a>
        </div>
      </div>
      <div className='footSpan'>
        <img  src={require('../img/losCoches.png')} />
        <p>Importador Oficial Los Coches 2022</p>
      </div>
    </footer>
  );
}

export default Footer;