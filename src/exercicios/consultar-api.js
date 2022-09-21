
import React, { useState, useEffect } from 'react';
function App(){
const [distritos, setDistritos] = useState([]);
useEffect (()=>{
    let url = "https://servicodados.ibge.gov.br/api/v1/localidades/distritos";
    fetch(url)
    .then((response) => response.json())
    .then((json) => {
        // var cidadesDe0a1000 = json;
        setDistritos(json);
    })
},[]);

  return(
    <div>
      <h1>Consultando API de destritos do Brasil.</h1>
      <ul>
        {distritos.map(distrito => (
          <li key={distrito.id}>{distrito.nome}</li>
        ))}
      </ul>
    </div>
  );
}
export default App;
