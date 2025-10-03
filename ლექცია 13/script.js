const poke_continaer = document.getElementById("poke-container");
const pokemon_count = 150;

const fetchPokemons = async () => {
  for (let i = 1; i <= pokemon_count; i++) {
    await getPokemonm(i);
  }
};
const colours = {
  normal: "#A8A77A",
  fire: "#EE8130",
  water: "#6390F0",
  electric: "#F7D02C",
  grass: "#7AC74C",
  ice: "#96D9D6",
  fighting: "#C22E28",
  poison: "#A33EA1",
  ground: "#E2BF65",
  flying: "#A98FF3",
  psychic: "#F95587",
  bug: "#A6B91A",
  rock: "#B6A136",
  ghost: "#735797",
  dragon: "#6F35FC",
  dark: "#705746",
  steel: "#B7B7CE",
  fairy: "#D685AD",
};

const main_types = Object.keys(colours);
const main_types_values = Object.values(colours);

const getPokemonm = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const data = await res.json();

  createPokemon(data);
};

const createPokemon = (pokemon) => {
  const pokemonEl = document.createElement("div");
  pokemonEl.classList.add("pokemon");
  const id = pokemon.id.toString().padStart(3, "0");

  const poke_types = pokemon.types.map((type) => type.type.name);
  //   console.log(poke_types);
  const type = main_types.find((type) => poke_types.indexOf(type) > -1);
  const color = colours[type];

  pokemonEl.style.backgroundColor = color;
  const pokemonInnerHYML = `
    <div class="img-contianer">
        <img  src="${pokemon.sprites.front_shiny}">
    </div>
    <div class="info">
        <span class="number">#${id}</span>
        <h3 class="name">${pokemon.name}</h3>
        <span class="number">Type:  ${type}</span>
    </div>
    `;
  pokemonEl.innerHTML = pokemonInnerHYML;

  poke_continaer.appendChild(pokemonEl);
};

fetchPokemons();
