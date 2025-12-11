const pokemon_foto = document.getElementById("foto-pokemon");
const descripcion = document.getElementById("descripcion-pokemon");
const barra_PS = document.getElementById("PS");
const barra_ataque = document.getElementById("ataque");
const barra_defensa = document.getElementById("defensa");
const barra_ataque_s = document.getElementById("ataque.s");
const barra_defensa_s = document.getElementById("defensa.s");
const barra_velocidad = document.getElementById("Velocidad");
const idiomaBtn = document.getElementById("idioma-btn");

const SCALE = 2;
//  // 1 punto de stat = 2px
const BARS = [barra_PS, barra_ataque, barra_defensa, barra_ataque_s, barra_defensa_s, barra_velocidad];
let currentSlot = null;


let idiomaActual = 'es';


function cambiarIdioma() {
    idiomaActual = idiomaActual === 'es' ? 'en' : 'es';
    
  
    idiomaBtn.textContent = idiomaActual === 'es' ? 'EN' : 'ES';
    
   
    document.querySelectorAll('[data-es][data-en]').forEach(el => {
        const text = idiomaActual === 'es' ? el.dataset.es : el.dataset.en;
        const img = el.querySelector && el.querySelector('img');
        if (img) {
            
            Array.from(el.childNodes).forEach(node => {
                if (node.nodeType === Node.TEXT_NODE) node.remove();
            });
            el.appendChild(document.createTextNode(text));
        } else {
            el.textContent = text;
        }
    });
    
    
    if (currentSlot) {
        const descKey = idiomaActual === 'es' ? 'descEs' : 'descEn';
        const desc = currentSlot.dataset[descKey];
        if (desc) {
            descripcion.textContent = desc;
        }
    }
    
    
    localStorage.setItem('idioma', idiomaActual);
}


if (idiomaBtn) {
    idiomaBtn.addEventListener('click', cambiarIdioma);
}


window.addEventListener('DOMContentLoaded', () => {
    const idiomaGuardado = localStorage.getItem('idioma');
    if (idiomaGuardado && idiomaGuardado !== 'es') {
        idiomaActual = 'es';
        cambiarIdioma();
    }
});

function cambiarDato(urlImagen, descripcionTexto, ps, atk, def, spa, spd, spe) {
    pokemon_foto.style.opacity = '0';
    descripcion.style.opacity = '0';
    
    setTimeout(() => {
        if (urlImagen) pokemon_foto.src = urlImagen;
        
        
        if (currentSlot) {
            const descKey = idiomaActual === 'es' ? 'descEs' : 'descEn';
            const desc = currentSlot.dataset[descKey];
            if (desc) {
                descripcion.textContent = desc;
            } else if (descripcionTexto !== undefined) {
                descripcion.textContent = descripcionTexto;
            }
        } else if (descripcionTexto !== undefined) {
            descripcion.textContent = descripcionTexto;
        }

        pokemon_foto.style.opacity = '1';
        descripcion.style.opacity = '1';
    }, 150);

    const stats = [ps, atk, def, spa, spd, spe];
    const bars = [barra_PS, barra_ataque, barra_defensa, barra_ataque_s, barra_defensa_s, barra_velocidad];

    stats.forEach((value, i) => {
        const bar = bars[i];
        if (!bar || value == null) return;

        let stat = typeof value === 'string' && value.endsWith('px')
            ? Math.round(parseInt(value, 10) / SCALE)
            : Number(value);

        if (isNaN(stat)) return;

        
        const container = bar.parentElement; 
        if (container) {
            
            container.style.animation = 'none';
            container.offsetHeight; // Forzar reflow
            container.style.animation = '';
            
            
            container.style.width = (stat * SCALE) + 'px';
        }
        bar.textContent = String(stat);

        // ---------- COLOR SEGÚN VALOR (aplicado al contenedor) ----------
        let color;
        if (stat < 35) {
            color = "rgba(255, 35, 35, 1)";
        } else if (stat < 60) {
            color = "rgba(255, 177, 31, 1)";
        } else if (stat < 78) {
            color = "rgba(255, 227, 44, 1)";
        } else if (stat < 95) {
            color = "rgba(50, 255, 53, 1)";
        } else {
            color = "rgba(90, 172, 255, 1)";
        }
        if (container) container.style.backgroundColor = color;

    });
}



document.querySelectorAll('[onclick*="cambiarDato("]').forEach(el => {
    el.addEventListener('click', () => {
        currentSlot = el;
        const target = document.getElementById('pokemon-select');
        if (target) {
            
            const targetPosition = target.getBoundingClientRect().top + window.scrollY;
            const startPosition = window.scrollY;
            const distance = targetPosition - startPosition;
            const duration = 1; 
            let start = null;
            
            function animation(currentTime) {
                if (start === null) start = currentTime;
                const elapsed = currentTime - start;
                const progress = Math.min(elapsed / duration, 100);
                
                
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



    

    



    
    