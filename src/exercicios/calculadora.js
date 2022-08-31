import { useState } from 'react';

function Exercicio() {
  const [aluno, setAluno] = useState({ nome: "Aluno", email: "email@email.com", idade: 0 });

  function changeName() {
    setAluno('Higor Bueno')
  }

  return (
    <Calculadora />
  );
}

export default Exercicio;

function Pessoa(props) {
  return (
    <p>{props.nome} - {props.idade}</p>
  );
}

function Calculadora(props) {
  return (
    <container class="container" >
      <div class="calculadora">
        <div class="numeros">
          <div id='fileira-1'>
            <div class="numero">1</div>
            <div class="numero">2</div>
            <div class="numero">3</div>
          </div>
          <div id='fileira-2'>
            <div class="numero">4</div>
            <div class="numero">5</div>
            <div class="numero">6</div>
          </div>
          <div id='fileira-3'>
            <div class="numero">7</div>
            <div class="numero">8</div>
            <div class="numero">9</div>
          </div>
          <div class="numero-0">
            <div>
            0
            </div>
          </div>
        </div>
      </div>
    </container>
  );
}
