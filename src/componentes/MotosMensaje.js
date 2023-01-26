import React from 'react';
import "../estilos/motosMensaje.css"

function MotosMensaje(props) {
  return (
    <div className='contMensaje'>
      <img src={props.src}/>
      <div className={props.clase}>
        <div className='datos'>
          <h1>{props.titulo}</h1>
          {props.subMensajeVal? <h3 className='subMensaje'>{props.subMensaje}</h3>:<></>}
          <p>{props.parrafo}</p>
          <a href='#'>DESCUBRE MÁS</a>
        </div>
      </div>
    </div>
  );
}

export default MotosMensaje;