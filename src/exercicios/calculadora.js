import { useState } from 'react';

function Exercicio() {
  const [numero1, setNumero1] = useState();
  const [numero2, setNumero2] = useState();

  function changeNumero1() {
    setNumero1('Higor Bueno');
  }

  function changeNumero2() {
    setNumero1('Higor Bueno');
  }
  return (
    <div>
      <form>
        <input id="numero1" placeholder='Digite o primeiro número' value={numero1} onChange={(e) => setNumero1(e.target.value)} />
        +
        <input id="numero2" placeholder='Digite o segundo número' value={numero2} onChange={(e) => setNumero2(e.target.value)} />
        = <Resultado numero1={numero1} numero2={numero2} />
      </form>

    </div>
  );
}

export default Exercicio;

function Pessoa(props) {
  return (
    <p>{props.nome} - {props.idade}</p>
  );
}

function Resultado(props) {
  var resultado = 0;
  const numero1 = props.numero1 ? parseInt(props.numero1) : 0;
  const numero2 = props.numero2 ? parseInt(props.numero2) : 0;
  
  resultado = numero1 + numero2;

  return (
    <div>
      {resultado}
    </div>
  );
}
