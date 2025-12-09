const menu = document.getElementById("menu");


const items = document.querySelectorAll(".nav-item");


const highlight = document.createElement("span");
highlight.classList.add("highlight");


menu.appendChild(highlight);


function moveHighlight(element) {
    const rect = element.getBoundingClientRect();
    const menuRect = menu.getBoundingClientRect();

    highlight.style.width = rect.width + "px";
    highlight.style.left = (rect.left - menuRect.left) + "px";
}


window.addEventListener("load", () => {
    moveHighlight(items[0]);
});


items.forEach(item => {
    item.addEventListener("click", () => {
        moveHighlight(item);

      
        items.forEach(i => i.classList.remove("active"));

     
        item.classList.add("active");
    });
});
const itens = document.querySelectorAll(".menu-item");
const indicador = document.querySelector(".menu-indicador");

function moverIndicador(elemento) {
    const itemRect = elemento.getBoundingClientRect();
    const menuRect = elemento.parentElement.getBoundingClientRect();

    indicador.style.width = itemRect.width + "px";
    indicador.style.left = (itemRect.left - menuRect.left) + "px";
}

itens.forEach(item => {
    item.addEventListener("click", () => {
        document.querySelector(".menu-item.ativo")?.classList.remove("ativo");
        item.classList.add("ativo");
        moverIndicador(item);
    });
});


moverIndicador(document.querySelector(".menu-item.ativo"));



