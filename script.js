
const pokemon_foto = document.getElementById("foto-pokemon");
const descripcion = document.getElementById("descripcion-pokemon");
const barra_PS = document.getElementById("PS");
const barra_ataque = document.getElementById("ataque");
const barra_defensa = document.getElementById("defensa");
const barra_ataque_s = document.getElementById("ataque.s");
const barra_defensa_s = document.getElementById("defensa.s");
const barra_velocidad = document.getElementById("Velocidad");

function cambiarDato(urlImagen, descripcionTexto, psValue, ataqueValue, defensaValue, ataqueSValue, defensaSValue, velocidadValue) {
    pokemon_foto.src = urlImagen;
    if (descripcionTexto !== undefined) descripcion.textContent = descripcionTexto;

    if (psValue !== undefined) {
      barra_PS.style.width = psValue;
      barra_PS.textContent = psValue.replace(/px$/,'');
    }
    if (ataqueValue !== undefined) {
      barra_ataque.style.width = ataqueValue;
      barra_ataque.textContent = ataqueValue.replace(/px$/,'');
    }
    if (defensaValue !== undefined) {
      barra_defensa.style.width = defensaValue;
      barra_defensa.textContent = defensaValue.replace(/px$/,'');
    }
    if (ataqueSValue !== undefined) {
      barra_ataque_s.style.width = ataqueSValue;
      barra_ataque_s.textContent = ataqueSValue.replace(/px$/,'');
    }
    if (defensaSValue !== undefined) {
      barra_defensa_s.style.width = defensaSValue;
      barra_defensa_s.textContent = defensaSValue.replace(/px$/,'');
    }
    if (velocidadValue !== undefined) {
      barra_velocidad.style.width = velocidadValue;
      barra_velocidad.textContent = velocidadValue.replace(/px$/,'');
    }
}
