function App() {
  return (
    <div>
      <h1>
        Aula 01 e 02
      </h1>
    <Pessoa nome="Higor" idade="22"/>
    <Pessoa nome="Dierison" idade="23"/>
    <Pessoa nome="Willian Doné" idade="21"/>
    </div>
  );
}

export default App;

function Pessoa(props){
  return (
    <p>{props.nome} - {props.idade}</p>
  );
}