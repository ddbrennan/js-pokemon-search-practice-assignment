const Pokemon = (() => {
  let id = 1
  return class Pokemon {
    constructor(name, imgUrl, backUrl) {
      this.id = id++
      this.name = name
      this.imgUrl = imgUrl
      this.frontUrl = imgUrl
      this.backUrl = backUrl
      pokemonBank[this.name] = this
    }

    render() {
      let pokeDiv1 = document.createElement('div')
      pokeDiv1.className = "pokemon-container"
      let pokeDiv2 = document.createElement('div')
      pokeDiv2.style = "width:230px;margin:10px;background:#fecd2f;color:#2d72fc"
      pokeDiv2.className = "pokemon-frame"
      let h1 = document.createElement('h1')
      h1.className = "center-text"
      h1.innerText = this.name
      let pokeDiv3 = document.createElement('div')
      pokeDiv3.style = "width:239px;margin:auto"
      let pokeDiv4 = document.createElement('div')
      pokeDiv4.style = "width:96px;margin:auto"
      let image = document.createElement('img')
      image.src = this.frontUrl
      image.className = `pic${this.id}`
      let p = document.createElement('p')
      p.style= "padding:10px;"
      p.className = "center-text flip-image"
      p.innerText = "flip card"
      pokeDiv4.append(image)
      pokeDiv3.append(pokeDiv4)
      pokeDiv2.append(h1)
      pokeDiv2.append(pokeDiv3)
      pokeDiv2.append(p)
      pokeDiv1.append(pokeDiv2)
      return pokeDiv1
    }

    flip() {
      if (this.imgUrl === this.backUrl) {
        this.imgUrl = this.frontUrl
      } else {
        this.imgUrl = this.backUrl
      }
      return this.imgUrl
    }
  }
})()
