import React from 'react';
import '../styles/BotonDelete.css';


export const MiBoton = (props) => (
    <div className='botonDelete' onClick={props.onClick}>
        {props.children}
    </div>
);