import React from 'react';
import "../estilos/itemMoto.css"
import { useNavigate } from 'react-router-dom';

function ItemMoto(props,{ manejarEnvio }) {
  const navigate = useNavigate();
    const MandarItem = ()=>{navigate(props.nombre)}
  return (
    <div className='item' onClick={()=>MandarItem()}>
      <img src={props.src}/>
      <span>{props.nombre}</span>
    </div>
  );
}

export default ItemMoto;