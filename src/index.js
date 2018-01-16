let pokemonBank = {}

function findOrCreatePokemon(poke) {
  if (pokemonBank[poke.name]) {
    return pokemonBank[poke.name]
  } else {
    mon = new Pokemon(poke.name, poke.sprites.front, poke.sprites.back)
    return mon
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const input = document.getElementById("pokemon-search-input")
  const flips = document.getElementById("pokemon-container")

  input.addEventListener('keyup', function(e) {
    document.querySelector("#pokemon-container").innerHTML = ""
    for (let i = 0; i < data["pokemons"].length; i++) {
      const pokemonFind = data["pokemons"][i]

      if (input.value) {
        if (pokemonFind.name.includes(input.value)) {
          const pokemon = findOrCreatePokemon(pokemonFind)
          const div = pokemon.render()
          document.querySelector("#pokemon-container").append(div)
        }
      }
    }

    if (!document.querySelector("#pokemon-container").innerHTML) {
      document.querySelector("#pokemon-container").innerHTML = "<p><center>There are no Pokémon here</center></p>"
    }
  })

  flips.addEventListener('click', function(e) {
    if (e.target.className.includes("flip-image")) {
      poke = pokemonBank[e.target.parentNode.children[0].innerText]
      e.target.parentNode.children[1].children[0].children[0].src = poke.flip()
    }
  })
})
