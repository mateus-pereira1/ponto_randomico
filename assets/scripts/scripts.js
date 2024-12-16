function Random(){

let nao = document.getElementById("nao");
let container = document.querySelector(".container");

let larguraContainer = container.offsetWidth;
let alturaContainer = container.offsetHeight;
let alturaBotao = nao.offsetHeight;
let larguraBotao = nao.offsetWidth;

const maxX = larguraContainer - larguraBotao;
const maxY = alturaContainer - alturaBotao;

const randomX = Math.floor(Math.random()*(maxX));
const randomY = Math.floor(Math.random()*(maxY));



    nao.style.position = "absolute";
    nao.style.left = `${randomX}px`;
    nao.style.top = `${randomY}px`;
}