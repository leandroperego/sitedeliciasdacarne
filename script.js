// REFERENCIAS DOM
let iconMenu = document.querySelector("#menu");
let telaMenuMobile = document.querySelector("#menuMobile");
let footerNavMobile = document.querySelector("#menuMobile footer");
let areaClicavelTelaMenu = document.querySelector("#areaClicavelVazio");

window.onload = function (){
    telaMenuMobile.style.display = "none";
}

let navDoProjeto = document.querySelector("nav").cloneNode(true);
div_listaOpcoes.insertBefore(navDoProjeto, footerNavMobile);

// EVENTS LISTENER
menu.addEventListener(`click`, () =>{
    mostrarMenuMobile();

    let botaoFecharMenuMobile = document.querySelector("#close_menuMobile");
    botaoFecharMenuMobile.addEventListener(`click`, fecharMenuMobile);
    areaClicavelTelaMenu.addEventListener(`click`, fecharMenuMobile);
});

// FUNCTIONS
function mostrarMenuMobile(){
    telaMenuMobile.style.display = "flex";
    telaMenuMobile.style.position = "fixed";
    telaMenuMobile.style.top = "0px";
    document.body.style.overflow = "hidden";
}

function fecharMenuMobile(){
    telaMenuMobile.style.display = "none";
    document.body.style.overflow = "visible";
}