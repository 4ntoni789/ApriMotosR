import React from 'react';
import "../estilos/imgGrande.css";

function ImgGrande(props) {
  return (
    <div className='contImgGran'>
      <img src={props.src} title={props.title} />
    </div>
  );
}

export default ImgGrande;