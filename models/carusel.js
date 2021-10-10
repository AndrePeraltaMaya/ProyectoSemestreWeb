$(document).ready(function() {

    const fila = document.querySelector('.contenedorCarousel');
    
    
    // ? ----- ----- Event Listener para la flecha derecha. ----- -----
    const flechaDerecha = document.getElementById('flechaDerecha');

    flechaDerecha.addEventListener('click', () => {
        if(fila.scrollLeft == 2732){
            fila.scrollLeft = 0; 
        }else{
            fila.scrollLeft += fila.offsetWidth;

        }
        
    
    });

    // ? ----- ----- Event Listener para la flecha izquierda. ----- -----
    const flechaIzquierda = document.getElementById('flechaIzquierda');

    flechaIzquierda.addEventListener('click', () => {
        if(fila.scrollLeft == 0){
            fila.scrollLeft = 2732; 
        }else{
            fila.scrollLeft -= fila.offsetWidth;

        }
    });
    
    // ? -----------------------------------------------------------------


    const peliculas = document.querySelectorAll('.pelicula');
    
    // ? ----- ----- Hover ----- -----
    peliculas.forEach((pelicula) => {
        pelicula.addEventListener('mouseover', (e) => {
            const elemento = e.currentTarget;
            setTimeout(() => { elemento.classList.add('hover') }, 300);
        });
    });

    peliculas.forEach((pelicula) => {
        pelicula.addEventListener('mouseout', (e) => {
            const elemento = e.currentTarget;
            setTimeout(() => { elemento.classList.remove('hover') }, 300);
        });
    });




});