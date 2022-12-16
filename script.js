
let iconMenu = document.querySelector("#menu");
let telaMenuMobile = document.querySelector("#menuMobile");

window.onload = function (){
    telaMenuMobile.style.display = "none";
}

let nav = document.querySelector("nav").cloneNode(true);
let footerNavMobile = document.querySelector("#menuMobile footer");

div_listaOpcoes.insertBefore(nav, footerNavMobile);

menu.addEventListener(`click`, event =>{
    telaMenuMobile.style.display = "flex";
    telaMenuMobile.style.position = "absolute";
    telaMenuMobile.style.top = `${event.pageY - 45}px`;
    document.body.style.overflow = "hidden";

    let botaoFecharMenuMobile = document.querySelector("#close_menuMobile");

    botaoFecharMenuMobile.addEventListener(`click`, () => {
        telaMenuMobile.style.display = "none";
        document.body.style.overflow = "visible";
    });
});