import { useState } from 'react';

function App() {
  const [tarefas, addTarefa] = useState([
    'Tarefa Numero 1',
    'Tarefa Numero 2'
  ]);

  function changeName() {
    addTarefa('Higor Bueno')
  }

  return (
    <div>
      Tarefas: 
      <ul>
        {tarefas.map((tarefa) => {
          <li key={tarefa}>{tarefa}</li>
        })}
      </ul>
    </div>
  );
}

export default App;

function Pessoa(props) {
  return (
    <p>{props.nome} vazio {props.idade}</p>
  );
}