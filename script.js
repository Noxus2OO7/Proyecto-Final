const pokemon_foto = document.getElementById("foto-pokemon");
const descripcion = document.getElementById("descripcion-pokemon");
const barra_PS = document.getElementById("PS");
const barra_ataque = document.getElementById("ataque");
const barra_defensa = document.getElementById("defensa");
const barra_ataque_s = document.getElementById("ataque.s");
const barra_defensa_s = document.getElementById("defensa.s");
const barra_velocidad = document.getElementById("Velocidad");

const SCALE = 2; // 1 punto de stat = 2px
const BARS = [barra_PS, barra_ataque, barra_defensa, barra_ataque_s, barra_defensa_s, barra_velocidad];

function cambiarDato(urlImagen, descripcionTexto, ps, atk, def, spa, spd, spe) {
    if (urlImagen) pokemon_foto.src = urlImagen;
    if (descripcionTexto !== undefined) descripcion.textContent = descripcionTexto;

    const stats = [ps, atk, def, spa, spd, spe];
    stats.forEach((value, i) => {
        const el = BARS[i];
        if (!el || value == null) return;

      
        let stat = typeof value === 'string' && value.endsWith('px')
            ? Math.round(parseInt(value, 10) / SCALE)
            : Number(value);

        if (isNaN(stat)) return;

        el.style.width = (stat * SCALE) + 'px';
        el.textContent = String(stat);
    });
}