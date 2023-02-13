import React from 'react';
import "../estilos/distribuidores.css"
import Footer from './Footer';

function Distribuidor(props) {
	return (
		<div className='contDistribuidores'>
			<div className='contDistribuidores__img'>
				<div className='contDistribuidores__img__modal'>
					<h5>CONSULTAR PUNTOS DE VENTA</h5>
					<h1>DISTRIBUIDORES</h1>
				</div>
			</div>
			<div className='contDistribuidores__ubicacion'>
				
			</div>
			<Footer/>
		</div>
	);
}

export default Distribuidor;