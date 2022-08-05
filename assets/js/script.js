const E = document.getElementById("esquerda");
const D = document.getElementById("direita");
const cont = document.getElementById("container");
var count = 0;

E.addEventListener("click", vaiEsquerda);
D.addEventListener("click", vaiDireita);

function vaiEsquerda(){
    if(count === 0){
        return;
    }else if(count === 1){
        cont.style.right = "0px";
        return count--;
    }else if(count === 2){
        cont.style.right = "400px";
        return count--;
    }
}

function vaiDireita(){
    if(count === 0){
        cont.style.right = "400px";
        cont.style.transition = "all 0.5s";
        return count++;
    }else if(count === 1){
        cont.style.right = "800px";
        return count++;
    }else if(count === 2){
        cont.style.right = "0px";
        return count = 0;
    }
}

// ----show-imgs----

const botao = document.getElementById("dark");
const body = document.getElementsByTagName("body")[0];
const opcao = document.getElementById("dark-light");
const darkMode = 'dark-mode';

function changes(){
    body.classList.toggle(darkMode);
    E.classList.toggle(darkMode);
    D.classList.toggle(darkMode);
    opcao.classList.toggle(darkMode);
    botao.classList.toggle(darkMode);
}

botao.addEventListener("click", changes);