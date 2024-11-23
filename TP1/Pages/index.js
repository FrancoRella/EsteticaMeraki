
 

import { navBar } from "../Components/navBar.js";


let navContainer = document.querySelector('header')

window.addEventListener('load', ()=>{
    navContainer.innerHTML= navBar;
}) //Cuando el documento se termine de ejecutar va cargar todo lo de adentro y el () es una funcion anonima*/

