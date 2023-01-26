import React from 'react';
import "../estilos/motoMostrar.css"

function MotoMostrar(props) {
  return (
    <div className='contMotoLayaot'>
      <div className='contMotoMuestra'>
        <div className='contMostrarMoto'>
          <img src={props.src} title={props.title} className="contInicio2" />
          <div className='contDatos contInicio2'>
            <h1><p>APRILIA</p>{props.referencia}</h1>
            <h4>PRECIO:</h4>
            <h1 className='datoPrecio'>${props.precio}*</h1>
          </div>
          <div className='clip'></div>
        </div>
      </div>
    </div>
  );
}

export default MotoMostrar;