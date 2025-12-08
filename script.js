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

// Agregar transición suave a todos los elementos de barras
BARS.forEach(bar => {
    if (bar) bar.style.transition = 'width 0.6s ease, color 0.3s ease';
});

// Agregar transición a foto y descripción
if (pokemon_foto) pokemon_foto.style.transition = 'opacity 0.3s ease';
if (descripcion) descripcion.style.transition = 'opacity 0.3s ease';

function cambiarDato(urlImagen, descripcionTexto, ps, atk, def, spa, spd, spe) {
    // Fade out effect
    pokemon_foto.style.opacity = '0';
    descripcion.style.opacity = '0';
    
    setTimeout(() => {
        if (urlImagen) pokemon_foto.src = urlImagen;
        if (descripcionTexto !== undefined) descripcion.textContent = descripcionTexto;
        
        // Fade in effect
        pokemon_foto.style.opacity = '1';
        descripcion.style.opacity = '1';
    }, 150);

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


document.querySelectorAll('[onclick*="cambiarDato("]').forEach(el => {
    el.addEventListener('click', () => {
        const target = document.getElementById('pokemon-select');
        if (target) {
            // Scroll suave personalizado más lento (1.2 segundos)
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 2; // 1.2 segundos
            let start = null;

            function animation(currentTime) {
                if (start === null) start = currentTime;
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 1);
                
                // Easing: ease-out (más rápido al inicio, más lento al final)
                const easeProgress = 1 - Math.pow(1 - progress, 3);
                
                window.scrollTo(0, startPosition + distance * easeProgress);
                
                if (progress < 1) {
                    requestAnimationFrame(animation);
                }
            }
            
            requestAnimationFrame(animation);
        }
    });
});