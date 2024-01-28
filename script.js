let pokemon_card_container = document.querySelector("#pokemon-card-container");
let seachbox=document.querySelector("#search");
let filterbtn=document.querySelector("#filter");
let select=document.querySelector("#select")
let type=document.querySelector("#type");

// ------------colors according to type--------------
let colors = {
  normal: "A9B0B3",
  fighting: "D76F2E",
  flying: "",
  poison: "BD86CC",
  ground: "F7E049",
  rock: "A8922C",
  bug: "79A449",
  ghost: "826AA8",
  steel: "",
  fire: "FD842F",
  water: "4F98C7",
  grass: "A0CF59",
  electric: "EFD73F",
  psychic: "F46EBD",
  ice: "5AC7E8",
  dragon: "DCAA2B",
  dark: "",
  fairy: "FDBDEA",
  unknown: "",
  shadow: "",
};

fetchmainpage();
async function fetchPokemon(i) {
  let response = await fetch("https://pokeapi.co/api/v2/pokemon/" + i);
  let result = await response.json();

  return result;
}


//--------------- function to fetch pokemons-----------------------
async function fetchmainpage() {
  for (let i = 1; i <= 151; i++) {
    let pokemon = await fetchPokemon(i);
    let card = createCard(pokemon);
    // console.log(pokemon);
   
    pokemon_card_container.appendChild(card);
  }
}




// -----------function for creating card----------------
function createCard(details) {
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<div class="card-inner"> <div class="card-front">
<div class="id">#${details.id}</div>
<img src="${details.sprites.front_default}" alt="">
<span class="name">${details.species.name}</span>
<span class="type">${details.types[0].type.name}</span></div>
<div class="card-back">

<img src="${details.sprites.back_default}" alt="">
<span class="ability">Abilities</span>
<span class="">${details.abilities[0].ability.name}</span>
<span class="name">${details.species.name}</span></div></div>`;
  card.querySelector(".card-inner").style.backgroundColor =
    "#" + colors[details.types[0].type.name];
  return card;
}

// let Allcard=document.querySelectorAll(".card");
seachbox.addEventListener("input",()=>{
  let Allcard=document.querySelectorAll(".card");
  let pokeArray=Array.from(Allcard);
  console.log(pokeArray)
  pokeArray.forEach((element)=>{
      let pokemon=element.children[0].children[0].children[2].innerHTML;
      if(pokemon.startsWith(seachbox.value)){
        element.style.display="flex";
      }else{
        element.style.display="none";
      }
  })
})


filterbtn.addEventListener("click",()=>{
  let Allcard=document.querySelectorAll(".card");
  let pokeArray=Array.from(Allcard);
  console.log(pokeArray)
  pokeArray.forEach((element)=>{
      let pokemon=element.children[0].children[0].children[3].innerHTML;
      if(pokemon==type.value){
        element.style.display="flex";
      }else{
        element.style.display="none";
      }
  })
})