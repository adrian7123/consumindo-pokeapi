window.onload = function() {
  renderCard()
 // getPokeImg('')
};

// Busca Pokemons da API

const getPokemons = async () => {
  const URL = "https://pokeapi.co/api/v2/pokemon/"
  
  let response = await fetch(URL)
  let datas = await response.json()
  
  let data = datas.results
  
  return data
}

var main = document.querySelector("#main")  

// Busca as imagens do pokemon

const getPokeImg = async (url) => {
  var response = await fetch(`${url}`)
  var pokemon = await response.json()
  
  var data = pokemon.sprites.back_default
  
  return data
}




// RENDERIZAR CARDS NA TELA 

const renderCard = async () => {
  
  // pegando dados
  var data = await getPokemons()
  
  // passando em cada item do OBJ
  // e criando um card
  data.forEach( async d => {
    
    // instânciando um card com uma classe
    var card = document.createElement('div')
    card.classList.add('card-panel')
    
    // instanciando um h6 que sera colocado o nome do pokemon
    var h6 = document.createElement('h6')
    h6.classList.add('center-align')
    
    var src = await getPokeImg(d.url)
    
    // instânciando o nome do pokemon
    var pokeName = document.createTextNode(
      d.name
    )
    
   
    var pokeImg = document.createElement('img')
    pokeImg.setAttribute('src', src)
    
    h6.appendChild(pokeName)
    card.appendChild(pokeImg)
    card.appendChild(h6) 
    main.appendChild(card) 
  }) 
}



