const cardsContainer = document.querySelector(".pokedex-cards");
const cardsCount = 150;

InitWebPage();

async function getPokemonInfo(pokemonID){
    let pokemons = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`);
    let pokemonJSON = await pokemons.json();
    let pokemonName = pokemonJSON.name;
    let pokemonType = pokemonJSON.types[0].type.name;
    let pokemonImage = `https://pokeres.bastionbot.org/images/pokemon/${pokemonID}.png`;
    return {
        image : pokemonImage,
        id: checkID(pokemonID),
        name : pokemonName,
        type : pokemonType
    }
}

function checkID(id){
    if(id < 10){
        return `00${id}`;
    }else if(id < 100){
        return `0${id}`;
    }else{
        return id;
    }
}

function detectBgColor(type){
    if(type == "grass"){
        return "#2ECC40";
    }else if(type == "fire"){
        return "#FF4136";
    }else if(type == "water"){
        return "#0074D9";
    }else if(type == "poison"){
        return "#01FF70";
    }else if(type == "bug"){
        return "#3D9970";
    }else if(type == "normal"){
        return "#AAAAAA";
    }else if(type == "fairy"){
        return "#85144b";
    }else if(type == "ground"){
        return "#FF851B";
    }else if(type == "electric"){
        return "#39CCCC";
    }else if(type == "rock"){
        return "#955251";
    }else if(type == "psychic"){
        return "#EFC050";
    }else if(type == "ghost"){
        return "#DFCFBE";
    }else if(type == "fighting"){
        return "#9B2335";
    }else if(type == "ice"){
        return "#98B4D4";
    }else if(type == "dragon"){
        return "#BC243C";
    }
}

function createCard(pokemonID){

    getPokemonInfo(pokemonID)
    .then((pokemon) => {
        let pokeCard = `
        <div class="pokedex-card" style="background-color:${detectBgColor(pokemon.type)}">
                <div class="pokedex-card-img-container">
                    <img src="${pokemon.image}" alt="${pokemon.image}" class="pokedex-card-img">
                </div>
                <div class="pokedex-card-info">
                    <div class="pokedex-card-id">
                        #${pokemon.id}
                    </div>
                    <div class="pokedex-card-name">
                        ${pokemon.name}
                    </div>
                    <div class="pokedex-card-type">
                        Type : ${pokemon.type}
                    </div>
                </div>
            </div>
    `
    cardsContainer.innerHTML += pokeCard;

    })
    
}

function InitWebPage(){
    for(let i = 1; i < cardsCount; i++){
        createCard(i);
    }
}







