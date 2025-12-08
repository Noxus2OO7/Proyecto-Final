const pokemon_select = document.getElementById ("pokemon-select")
const pokemon_info = document.getElementById ("pokemon-info")
const pokemon_texto = document.getElementById ("pokemon-texto")
const barra_dentro = document.getElementById ("barra-dentro")


const ataque = document.getElementById ("ataque")
const ps = document.getElementById ("PS")
const defensa = document.getElementById ("defensa")
const ataque_s = document.getElementById ("ataque.s")
const defensa_s = document.getElementById ("defensa.s")


const ivysaur_slot = document.getElementById ("ivysaur_slot")   
const pokemon_foto = document.getElementById ("foto-pokemon")

function cambio() {

pokemon_foto.src = "./imagesnes/ivysaur-real.png";

}

ivysaur_slot.onclick = cambio(){
pokemon_foto.src = "./imagesnes/ivysaur-real.png"
}