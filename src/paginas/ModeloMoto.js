import React from 'react';
import { useParams } from 'react-router-dom';
import "../estilos/modeloMotos.css";
import themeContext, { moto } from "../context/themeContext.js";
import MotoMostrar from '../componentes/MotoMostrar';
import Footer from '../componentes/Footer';
import BntDesCatalogo from '../componentes/BntDesCatalogo';
import ReseñaMoto from '../componentes/ReseñaMoto';
import MotosMensaje from '../componentes/MotosMensaje';
import ImgGrande from '../componentes/ImgGrande';
import SliderMoto from "../componentes/SliderMoto.js"
import EspMoto from '../componentes/EspMoto';

function ModeloMoto(props) {
	const { name, id } = useParams();
	let motoIden =[];
	return (
		<themeContext.Provider value={moto}>
			<div className='contModeloMoto contInicio2' >
				{moto.map((m) => {
					if (m.name == name) {
						motoIden = m;
						return (<MotoMostrar key={m.key} src={m.srcM1||m.src} title={m.name} precio={m.precio} referencia={m.ref} />)
					}
				})}
				<BntDesCatalogo />
				<ReseñaMoto />
				<MotosMensaje
					clase="mensaje2"
					src={motoIden.src3}
					subMensajeVal="true"
					subMensaje="PURA ACTITUD APRILIA"
					parrafo="La Aprilia RS 660 utiliza la experiencia ganadora de Aprilia para establecer nuevos estándares en esta categoría de vehículo. La ciclística tope de gama maximiza la experiencia de conducción dinámica gracias al chasis y basculante de aluminio con características de construcción únicas, que garantizan una distribución óptima del peso y la máxima ligereza."
				/>
				<MotosMensaje
					clase="mensaje"
					src={motoIden.src4}
					subMensajeVal="true"
					subMensaje="PURA ACTITUD APRILIA"
					parrafo="La Aprilia RS 660 utiliza la experiencia ganadora de Aprilia para establecer nuevos estándares en esta categoría de vehículo. La ciclística tope de gama maximiza la experiencia de conducción dinámica gracias al chasis y basculante de aluminio con características de construcción únicas, que garantizan una distribución óptima del peso y la máxima ligereza."
				/>
				<MotosMensaje
					clase="mensaje2"
					src={motoIden.src5}
					titulo={motoIden.name}
					subMensajeVal="true"
					subMensaje="UNA NUEVA EXPERIENCIA DE CONDUCCIÓN"
					parrafo="La Aprilia RS 660 utiliza la experiencia ganadora de Aprilia para establecer nuevos estándares en esta categoría de vehículo. La ciclística tope de gama maximiza la experiencia de conducción dinámica gracias al chasis y basculante de aluminio con características de construcción únicas, que garantizan una distribución óptima del peso y la máxima ligereza."
				/>
				<ImgGrande src={motoIden.srcM1} title={motoIden.name}/>
				<EspMoto/>
			</div>
				<SliderMoto/>
			<Footer />
		</themeContext.Provider>
	);
}

export default ModeloMoto;