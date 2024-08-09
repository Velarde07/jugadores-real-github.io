// Add JS here
import {jugadoresMadrid} from './jugadores.js'

let index = 0;

function  avanzar() {
    let fotografia = document.getElementById('fotoJugador');
    let dorso = document.getElementById('dorsal');
    let nombres = document.getElementById('nombre');
    let posiciones = document.getElementById('posicion');

    index = (index + 1) % jugadoresMadrid.length; 

    fotografia.src = jugadoresMadrid[index].imagen;
    dorso.textContent = jugadoresMadrid[index].dorsal;
    nombres.textContent = jugadoresMadrid[index].nombre;
    posiciones.textContent = jugadoresMadrid[index].posicion;
}

function retroceder(){
    let fotografia = document.getElementById('fotoJugador');
    let dorso = document.getElementById('dorsal');
    let nombres = document.getElementById('nombre');
    let posiciones = document.getElementById('posicion');

    index = (index - 1 + jugadoresMadrid.length) % jugadoresMadrid.length;

    fotografia.src = jugadoresMadrid[index].imagen;
    dorso.textContent = jugadoresMadrid[index].dorsal;
    nombres.textContent = jugadoresMadrid[index].nombre;
    posiciones.textContent = jugadoresMadrid[index].posicion;
}

window.avanzar = avanzar;
window.retroceder = retroceder;