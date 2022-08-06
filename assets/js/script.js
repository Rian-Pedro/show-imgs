const E = document.getElementById("esquerda");
const D = document.getElementById("direita");
const cont = document.getElementById("container");
const teste = document.querySelectorAll("div#image");

var count = 0;
var numImg = 400;
var px = 'px';
var r = 0;
var valor;

for(let i = 0; i < teste.length; i++){
    count++;
}

D.addEventListener("click", direita)
function direita(){
    r++
    valor = numImg * r + px;
    if(r > teste.length - 1){
        cont.style.right = 0;
        r = 0;
        return;
    }
    cont.style.right = valor;
}

E.addEventListener("click", esquerda)
function esquerda(){
    if(r <= 0){
        cont.style.right = "0px";
        r = 0;
        return;
    }
    r--;
    valor = numImg * r + px;
    cont.style.right = valor;
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