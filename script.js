// ==========================================
// CENTRAL DE PAINÉIS PREMIUM
// script.js
// ==========================================


document.addEventListener("DOMContentLoaded",()=>{


const cards = document.querySelectorAll(".card");

const busca = document.getElementById("pesquisa");

const contador = document.getElementById("total");



// ===============================
// CONTADOR DINÂMICO
// ===============================

function atualizarContador(){

let visiveis=0;


cards.forEach(card=>{

if(card.style.display !== "none"){

visiveis++;

}

});


if(contador){

contador.innerHTML=visiveis;

}


}


atualizarContador();




// ===============================
// PESQUISA INTELIGENTE
// ===============================


if(busca){

busca.addEventListener("input",()=>{


let texto=busca.value.toLowerCase();



cards.forEach(card=>{


let nome=
card.querySelector("h3")
.textContent
.toLowerCase();



if(nome.includes(texto)){


card.style.display="block";


}else{


card.style.display="none";


}



});


atualizarContador();


});


}




// ===============================
// ENTRADA ANIMADA DOS CARDS
// ===============================


cards.forEach((card,index)=>{


card.style.opacity="0";

card.style.transform=
"translateY(50px)";


setTimeout(()=>{


card.style.transition=
"all .6s ease";


card.style.opacity="1";


card.style.transform=
"translateY(0)";


},index*70);



});





// ===============================
// EFEITO 3D PREMIUM
// ===============================


cards.forEach(card=>{


card.addEventListener("mousemove",(e)=>{


let rect=
card.getBoundingClientRect();



let x=
e.clientX-rect.left;


let y=
e.clientY-rect.top;



let centerX=
rect.width/2;


let centerY=
rect.height/2;



let rotateX=
(y-centerY)/15;


let rotateY=
(centerX-x)/15;



card.style.transform=
`
perspective(900px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)
`;



});




card.addEventListener("mouseleave",()=>{


card.style.transform="";


});



});






// ===============================
// HISTÓRICO DE ACESSOS
// ===============================


const botoes=
document.querySelectorAll(".card a");



botoes.forEach(botao=>{


botao.addEventListener("click",()=>{


let card=
botao.closest(".card");


let nome=
card.querySelector("h3").textContent;



let historico=
JSON.parse(
localStorage.getItem("historico")
) || [];



historico.unshift({

nome:nome,

data:new Date()
.toLocaleString("pt-BR")

});



historico=
historico.slice(0,10);



localStorage.setItem(
"historico",
JSON.stringify(historico)
);



});



});






// ===============================
// IMAGENS DAS LOGOS
// ===============================


document.querySelectorAll(".logo img")
.forEach(img=>{


img.loading="lazy";



img.onerror=function(){


this.style.display="none";


let fallback=
this.nextElementSibling;



if(fallback){

fallback.style.display="flex";

}



};


});






// ===============================
// BOTÃO TOPO
// ===============================


const topo=
document.createElement("button");


topo.id="topo";

topo.innerHTML="⬆";

document.body.appendChild(topo);



window.addEventListener("scroll",()=>{


if(window.scrollY>500){


topo.classList.add("show");


}else{


topo.classList.remove("show");


}


});



topo.onclick=()=>{


window.scrollTo({

top:0,

behavior:"smooth"

});


};






// ===============================
// RELÓGIO
// ===============================


function atualizarHora(){


let elemento=
document.getElementById("relogio");



if(elemento){


elemento.innerHTML=
new Date()
.toLocaleTimeString("pt-BR");


}


}


setInterval(atualizarHora,1000);






// ===============================
// PARTÍCULAS
// ===============================


if(typeof particlesJS !== "undefined"){



particlesJS("particles-js",{


particles:{


number:{

value:80

},


color:{

value:"#00eaff"

},


shape:{

type:"circle"

},


opacity:{

value:.35

},


size:{

value:3

},


move:{

enable:true,

speed:1.2

},


line_linked:{

enable:true,

distance:140,

color:"#00eaff",

opacity:.2

}



},


interactivity:{


events:{


onhover:{


enable:true,

mode:"repulse"

}


}



}



});



}




console.log(
"🚀 Central de Painéis Premium carregada"
);



});
