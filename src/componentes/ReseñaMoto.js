import React from 'react';
import "../estilos/reseñaMoto.css"
import BntDesCatalogo from './BntDesCatalogo';

function ReseñaMoto(props) {
  return (
    <div className='contRese'>
      <div className='contReseMoto'>
        <img src="https://aprilia-colombia.com/wp-content/uploads/elementor/thumbs/rs660_Neon_900x675-1-pmluelqnj5mo7dwk224ekzbo5gsoq69pb37i3drfsa.gif" />
        <div className='rese'>
          <h2>Aprilia RS 660</h2>
          <p>El futuro respeta la tradición de la casa Noale que siempre se ha destacado por su carácter e innovación. Con personalidad deportiva y sorprendentes líneas contemporáneas, la Aprilia RS 660 lleva a la carretera la experiencia líder de Aprilia en circuito. El diseño único da forma a una motocicleta ligera y compacta, con volúmenes ágiles y aerodinámicos, estable a altas velocidades, divertida y agradable de conducir. La gama de colores RS 660 presenta un nuevo Acid Gold que realza el diseño y el carácter dinámico y juvenil de la motocicleta Aprilia.</p>
        </div>
      </div>
      <BntDesCatalogo/>
    </div>
  );
}

export default ReseñaMoto;