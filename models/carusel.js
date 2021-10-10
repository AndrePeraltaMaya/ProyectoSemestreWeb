$(document).ready(function() {


    function moverDerecha(fila){
        if(fila.scrollLeft == 2732){
            fila.scrollLeft = 0; 
        }else{
            fila.scrollLeft += fila.offsetWidth;

        }
    }
    function moverIzquierda(fila){
        if(fila.scrollLeft == 0){
            fila.scrollLeft = 2732; 
        }else{
            fila.scrollLeft -= fila.offsetWidth;

        }
    }

    let fila = document.getElementById('contenedorCarousel');
    let fila2 = document.getElementById('contenedorCarousel2');
    let fila3 = document.getElementById('contenedorCarousel3');
    let fila4 = document.getElementById('contenedorCarousel4');
    let fila5 = document.getElementById('contenedorCarousel5');
    
    
    // ? ----- ----- Event Listener para la flecha derecha. ----- -----

    document.getElementById('flechaDerecha').addEventListener('click', () => { moverDerecha(fila) });
    document.getElementById('flechaDerecha2').addEventListener('click', () => { moverDerecha(fila2) });
    document.getElementById('flechaDerecha3').addEventListener('click', () => { moverDerecha(fila3) });
    document.getElementById('flechaDerecha4').addEventListener('click', () => { moverDerecha(fila4) });
    document.getElementById('flechaDerecha5').addEventListener('click', () => { moverDerecha(fila5) });



    // ? ----- ----- Event Listener para la flecha izquierda. ----- -----

    document.getElementById('flechaIzquierda').addEventListener('click', () => { moverIzquierda(fila)  });
    document.getElementById('flechaIzquierda2').addEventListener('click', () => { moverIzquierda(fila2)  });
    document.getElementById('flechaIzquierda3').addEventListener('click', () => { moverIzquierda(fila3)  });
    document.getElementById('flechaIzquierda4').addEventListener('click', () => { moverIzquierda(fila4)  });
    document.getElementById('flechaIzquierda5').addEventListener('click', () => { moverIzquierda(fila5)  });
    
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