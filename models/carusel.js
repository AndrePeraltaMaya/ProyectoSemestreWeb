$(document).ready(function() {

    const fila = document.querySelector('.contenedorCarousel');
    const peliculas = document.querySelectorAll('.pelicula');
    
    const flechaIzquierda = document.getElementById('flechaIzquierda');
    const flechaDerecha = document.getElementById('flechaDerecha');
    
    // ? ----- ----- Event Listener para la flecha derecha. ----- -----
    flechaDerecha.addEventListener('click', () => {
        fila.scrollLeft += fila.offsetWidth;
    
        const indicadorActivo = document.querySelector('.indicadores .activo');
        if(indicadorActivo.nextSibling){
            indicadorActivo.nextSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });
    
    // ? ----- ----- Event Listener para la flecha izquierda. ----- -----
    flechaIzquierda.addEventListener('click', () => {
        fila.scrollLeft -= fila.offsetWidth;
    
        const indicadorActivo = document.querySelector('.indicadores .activo');
        if(indicadorActivo.previousSibling){
            indicadorActivo.previousSibling.classList.add('activo');
            indicadorActivo.classList.remove('activo');
        }
    });
    

    
    // ? ----- ----- Hover ----- -----
    peliculas.forEach((pelicula) => {
        pelicula.addEventListener('mouseenter', (e) => {
            const elemento = e.currentTarget;
            setTimeout(() => {
                peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
                elemento.classList.add('hover');
            }, 300);
        });
    });
    
    fila.addEventListener('mouseleave', () => {
        peliculas.forEach(pelicula => pelicula.classList.remove('hover'));
    });
});