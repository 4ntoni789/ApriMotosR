import React, { Suspense, lazy, useEffect } from 'react';
import Footer from '../componentes/Footer';
import MotosMensaje from '../componentes/MotosMensaje';
import "../estilos/inicio.css";
import themeContext, { moto } from "../context/themeContext.js";
import BntSubirPagina from '../componentes/BntSubirPagina';
import { useState } from 'react';
const ItemMoto = lazy(() => import("../componentes/ItemMoto"));

function Inicio(props) {
  return (
    <themeContext.Provider value={moto}>
      <div className='contInicio contInicio2'>
        <img id='Span123' src='https://aprilia-colombia.com/wp-content/uploads/2023/01/Aprilia-Banner-Desktop.jpg' />
        <div className='span'>
          <h1>APRILIA Colombia</h1>
          <h1>¡DESCUBRE TODAS LAS EMOCIONANTES NOVEDADES QUE EL GRUPO PIAGGIO PRESENTÓ EN EICMA 2021!</h1>
          <p>
            NUEVOS MODELOS POR CADA MARCA, DISEÑADOS PARA UNA GRAN CANTIDAD DE SITUACIONES
            DIVERSAS, DESDE TRAYECTOS DIARIOS HASTA CONDUCCIÓN DEPORTIVA Y TODOTERRENO,
            ADEMÁS, DE NUESTROS MOTORES ELÉCTRICOS DE CERO EMISIONES.<b>¡MIRA EL VIDEO Y
              PREPARATE PARA UN 2022 AÚN MÁS DINÁMICO Y SORPRENDENTE!</b>
          </p>
        </div>
        <div className='contVideo'>
          <img className='video' src="https://i.vimeocdn.com/video/1508314037-5c72033a100f51b9076cf84d97dfe2de25333c47aeec2bf1569fa8bdde957e29-d?mw=1000&mh=563" />
        </div>
        <MotosMensaje
          clase="mensaje"
          src="https://aprilia-colombia.com/wp-content/uploads/2022/03/Tuono660_Editorial_Cover_1920x640.jpg"
          titulo="Aprilia: Máxima deportividad en carretera y en pista."
          parrafo="Descubre la nueva gama Aprilia y aprovéchate de la increible financiación." />

        <MotosMensaje
          clase="mensaje"
          src="https://aprilia-colombia.com/wp-content/uploads/2022/03/sr-gr-amb_cover_1920x640-1.jpg"
          titulo="Aprilia SR GT"
          subMensajeVal="true"
          subMensaje="Deportividad diaria"
          parrafo="Aprilia SR GT está diseñada para satisfacer el instinto de aventura que significa ir más allá de los límites urbanos y explorar diferentes terrenos. Disponible en versión SR GT 200." />

        <MotosMensaje
          clase="mensaje2"
          src="https://aprilia-colombia.com/wp-content/uploads/2022/03/Editorial_cover_1920x640_desktop.jpg"
          titulo="Aprilia SXR"
          subMensajeVal="true"
          subMensaje="Súbete y conquista la ciudad"
          parrafo="La Aprilia SXR 160 es la primer scooter urbano de pequeña cilindrada que combina la comodidad de última generación, la eficiencia de combustible y el carácter agresivo de Aprilia. También es un modelo apto para los más jóvenes por su agilidad, prodigioso agarre a la carretera y una relación calidad-precio inigualable. Dinámico y funcional, la Aprilia SXR 160 está listo para conquistar todas las calles de cada ciudad." />

        <MotosMensaje
          clase="mensaje"
          src="https://aprilia-colombia.com/wp-content/uploads/2022/03/MicrosoftTeams-image53.jpg"
          titulo="Inimitable Aprilia Tuono"
          parrafo="Los inimitables hipernaked se desdoblan. La Aprilia Tuono V4 Factory, la máquina que produce adrenalina, sensaciones fuertes y pura diversión, sigue evolucionando para confirmarse como imbatible, tanto en carretera como en circuito. La Tuono V4, gracias a la nueva ergonomía y los accesorios exclusivos, realza su naturaleza viajera y se ofrece como una moto extraordinaria para viajar. Obviamente muy rápido." />

        <MotosMensaje
          clase="mensaje"
          src="https://aprilia-colombia.com/wp-content/uploads/2022/03/coverRsv4_desktop.jpg"
          titulo="La Superbike definitiva"
          subMensajeVal="true"
          subMensaje="Aprilia RSV4"
          parrafo="Parecía imposible, pero la Aprilia RSV4 se ha superado una vez más. Apéndices aerodinámicos integrados y carenado de doble capa para mejorar la eficiencia aerodinámica." />

        <MotosMensaje
          clase="mensaje"
          src="https://aprilia-colombia.com/wp-content/uploads/2022/03/cover_desktop_1920x640.jpg"
          titulo="La nueva gama V4"
          subMensajeVal="true"
          subMensaje="Diseñada para superar los límites"
          parrafo="Aprilia RSV4 y Tuono V4: la indiscutible Superbike y la Hypernaked por excelencia, dos proyectos extraordinarios y únicos en el mundo están listos para abrirse camino para dominar sus respectivas categorías"
        />
        <MotosMensaje
          clase="mensaje"
          src="https://aprilia-colombia.com/wp-content/uploads/2022/03/editorial_cover_1920x640_design.jpg"
          titulo="Aprilia RS 660"
          subMensajeVal="true"
          subMensaje="PURA ACTITUD APRILIA"
          parrafo="El futuro respeta la tradición de la casa Noale que siempre se ha destacado por su carácter e innovación. Con personalidad deportiva y sorprendentes líneas contemporáneas, la RS 660 lleva a la carretera la experiencia líder de Aprilia en circuito."
        />
        <div className='items'>
          <Suspense fallback={<h1>cargando...</h1> /*<Loading/>*/}>
            {moto.map((m) => {
              return <ItemMoto src={m.src} nombre={m.name} key={m.key}/>
            })}
          </Suspense>
        </div>
        <BntSubirPagina redireccion="#Span123"/>
        <Footer />
      </div>
    </themeContext.Provider>
  );
}

export default Inicio;