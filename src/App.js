import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import Boton from './components/Boton';
import { Pantalla } from './components/Pantalla';
import { BotonClear } from './components/BotonClear';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import { MiBoton } from './components/BotonDelete';


function App() {

  const [input, setInput] = useState('');

  const agregarInput = val => {
    setInput(input + val);
  };

  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input)); // la función evaluar se consigue instalando mathjs
    } else {
      alert("Ingrese valores para realizar los cálculos.");
    }
  };

  const BorrarUltimo = () => {
    if (input) {
      setInput(input.slice(0, -1));
    }
  };
  

  return (
    <div className='App'>
      <div className='calculator'>
        <Pantalla input={input}/>
        <div className="fila">
        <Boton manejarClic={agregarInput}>1</Boton>
        <Boton manejarClic={agregarInput}>2</Boton>
        <Boton manejarClic={agregarInput}>3</Boton>
        <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={agregarInput}>4</Boton>
        <Boton manejarClic={agregarInput}>5</Boton>
        <Boton manejarClic={agregarInput}>6</Boton>
        <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={agregarInput}>7</Boton>
        <Boton manejarClic={agregarInput}>8</Boton>
        <Boton manejarClic={agregarInput}>9</Boton>
        <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className="fila">
        <Boton manejarClic={agregarInput}>.</Boton>
        <Boton manejarClic={agregarInput}>0</Boton>
        <Boton manejarClic={calcularResultado}>=</Boton>
        <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className="fila">
          <BotonClear clearAll={() => setInput('')}>
            C
          </BotonClear >
          <MiBoton onClick={BorrarUltimo}>
            &larr;
          </MiBoton>
        </div>
      </div>
    </div>
  );
}

export default App;
