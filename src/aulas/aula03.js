import { useState } from 'react';

function App() {
  const [aluno, setAluno] = useState({nome: "Aluno", email: "email@email.com", idade: 0});

  function changeName() {
    setAluno('Higor Bueno')
  }

  return (
    <div>
      <h1>
        Aula 03
      </h1>
      <h2>
        Olá {aluno.nome} <br/>
        email: {aluno.email} <br/>
        idade: {aluno.idade} <br/>
      </h2>

      <button onClick={changeName}>
        Mudar nome
      </button>

      <Pessoa nome="Higor" idade="22" />
      <Pessoa nome="Dierison" idade="23" />
      <Pessoa nome="Willian Doné" idade="21" />

      <form>
      <label for="nome">Nome: </label>
        <input id="nome" placeholder='Digite seu nome' value={aluno.nome} onChange={(e) => setAluno({nome: e.target.value})} />

        <label for="email">Nome: </label>
        <input id="email" placeholder='Digite seu email' value={aluno.email} onChange={(e) => setAluno({email: e.target.value})} />

        <label for="nome">Nome: </label>
        <input id="nome" placeholder='Digite seu nome' value={aluno.idade} onChange={(e) => setAluno({idade: e.target.value})} />

      </form>
      
    </div>
  );
}

export default App;

function Pessoa(props) {
  return (
    <p>{props.nome} - {props.idade}</p>
  );
}