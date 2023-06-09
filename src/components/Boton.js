import React from "react";
import '../styles/Boton.css';


function Boton(props) {

    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=');
    }


    return (
        <div 
            className={`boton-num ${esOperador(props.children) ? 'boton-operador' : null}`.trimEnd()}
                onClick={() => props.manejarClic(props.children)}>
            {props.children}
        </div>
    );
}

export default Boton;