// ================================
// CENTRAL DE PAINÉIS
// script.js
// ================================

// Pesquisa
const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

search.addEventListener("keyup", function () {

    let valor = this.value.toLowerCase();

    cards.forEach(card => {

        let nome = card.querySelector("h2").textContent.toLowerCase();

        if (nome.indexOf(valor) > -1) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }

    });

    atualizarContadores();

});

//===============================
// CONTADORES
//===============================

function atualizarContadores(){

    let total = 0;
    let online = 0;
    let offline = 0;

    cards.forEach(card=>{

        if(card.style.display!="none"){

            total++;

            let status = card.querySelector(".status").textContent.toLowerCase();

            if(status.includes("online") || status.includes("cs tv")){
                online++;
            }else{
                offline++;
            }

        }

    });

    document.getElementById("total").innerHTML=total;
    document.getElementById("online").innerHTML=online;
    document.getElementById("offline").innerHTML=offline;

}

atualizarContadores();


//===============================
// ANIMAÇÃO DOS CARDS
//===============================

window.addEventListener("load",()=>{

    cards.forEach((card,index)=>{

        card.style.opacity="0";
        card.style.transform="translateY(60px)";

        setTimeout(()=>{

            card.style.transition="0.6s";
            card.style.opacity="1";
            card.style.transform="translateY(0px)";

        },index*80);

    });

});


//===============================
// PARTÍCULAS
//===============================

particlesJS("particles-js", {

    particles: {

        number: {
            value: 90
        },

        color: {
            value: "#3b82f6"
        },

        shape: {
            type: "circle"
        },

        opacity: {
            value: 0.4
        },

        size: {
            value: 3
        },

        move: {
            enable: true,
            speed: 1.5
        },

        line_linked:{
            enable:true,
            distance:150,
            color:"#3b82f6",
            opacity:0.2
        }

    }

});


//===============================
// BOTÃO VOLTAR AO TOPO
//===============================

const topo=document.createElement("button");

topo.innerHTML="⬆";

topo.id="topo";

document.body.appendChild(topo);

window.addEventListener("scroll",()=>{

    if(window.scrollY>400){

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


//===============================
// EFEITO NOS CARDS
//===============================

cards.forEach(card=>{

    card.addEventListener("mousemove",(e)=>{

        const rect=card.getBoundingClientRect();

        const x=e.clientX-rect.left;

        const y=e.clientY-rect.top;

        card.style.background=
        `radial-gradient(circle at ${x}px ${y}px,
        rgba(59,130,246,.35),
        rgba(255,255,255,.06))`;

    });

    card.addEventListener("mouseleave",()=>{

        card.style.background="";

    });

});


//===============================
// RELÓGIO
//===============================

function relogio(){

    let agora=new Date();

    let hora=agora.toLocaleTimeString("pt-BR");

    let r=document.getElementById("relogio");

    if(r){

        r.innerHTML=hora;

    }

}

setInterval(relogio,1000);


//===============================
// MENSAGEM
//===============================

console.log("Central de Painéis carregada com sucesso.");