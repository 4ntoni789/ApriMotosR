import React, { useEffect, useState } from 'react';
import "../estilos/bntSubirPagina.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleDown, faArrowUpFromBracket } from '@fortawesome/free-solid-svg-icons';

function BntSubirPagina(props) {
    const [btnSubir, setBtnSubir] = useState(false)
    useEffect(() => {
        let scrollY;
        window.addEventListener("scroll", e => {
            scrollY = document.documentElement.scrollTop;
            scrollY > 550 ? setBtnSubir(true) : setBtnSubir(false);
        })
    }, [btnSubir])
    return (
        <div className={btnSubir?"contBtnSubir contBtnSubir2":"contBtnSubir"}>
            <a href={props.redireccion}>{<FontAwesomeIcon icon={faArrowUpFromBracket} />}</a>
        </div>
    );
}

export default BntSubirPagina;