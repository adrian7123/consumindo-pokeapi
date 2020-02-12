/*
  var a = document.createElement('p');
  var pe = document.createTextNode('alooo');
  a.appendChild(pe)

*/

var main = document.querySelector("#main");

const pokemons = async () => {
  const URL = "https://pokeapi.co/api/v2/pokemon/";
  
  let response = await fetch(URL);
  let dados = await response.json();
  
  let data = dados.results.map(data => data.name);
  
  var nodePoke = document.createTextNode(JSON.stringify(data));
  main.appendChild(nodePoke);
}

pokemons()


