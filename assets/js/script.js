const E = document.getElementById("esquerda");
const D = document.getElementById("direita");
const cont = document.getElementById("container");
var count = 0;

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
        return count++;
    }else if(count === 1){
        cont.style.right = "800px";
        return count++;
    }else if(count === 2){
        cont.style.right = "0px";
        return count = 0;
    }
}