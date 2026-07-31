// ==========================================
// CENTRAL DE PAINÉIS PREMIUM - script.js
// ==========================================

// 1. CREDENCIAIS DE ACESSO AO SISTEMA
const credenciaisValidas = {
  usuario: "admin", // Altere seu usuário aqui
  senha: "12345"    // Altere sua senha aqui
};

// 2. BANCO DE DADOS DOS PAINÉIS E APPS
const paineisOficiais = [
  { nome:"TopZ TV", logo:"logos/topztv.png", url:"https://topztv.sigma.vin/#/sign-in" },
  { nome:"Prod TV", logo:"logos/prodtv.png", url:"https://prodtv.sigma.st/#/sign-in" },
  { nome:"Painel Black BR", logo:"logos/blackbr.png", url:"https://painelblackbr.com/#/sign-in" },
  { nome:"Fenix Streaming", logo:"logos/fenix.png", url:"https://fenixstreaming.sigma.vin/#/sign-in" },
  { nome:"Onix Play", logo:"logos/onix.png", url:"https://onixplay.top/#/sign-in" },
  { nome:"Servidor Play", logo:"logos/servidor.png", url:"https://servidorplay.sigmab.pro/#/sign-in" },
  { nome:"A2 Play", logo:"logos/a2.png", url:"https://a2play.sigmab.pro/#/sign-in" },
  { nome:"VIP Sigma", logo:"logos/vip.png", url:"https://vip.sigma.vin/#/sign-in" },
  { nome:"One", logo:"logos/one.png", url:"https://one.srvi.top/" },
  { nome:"ET Player", logo:"logos/etplayer.png", url:"https://etplayer.smartsignus.com/auth/login.php" },
  { nome:"Super STV", logo:"logos/superstv.png", url:"https://superstv.sigma.vin/#/sign-in" },
  { nome:"Lunna BR", logo:"logos/lunnabr.png", url:"https://lunnabr.site/#/sign-in" },
  { nome:"FS Play", logo:"logos/fsplay.png", url:"https://fsplay.fpanel.top/" },
  { nome:"Pro Black", logo:"logos/problack.png", url:"https://problack.sigma.st/#/sign-in" },
  { nome:"Play Max", logo:"logos/playmax.png", url:"https://playmax.sigmab.pro/#/sign-in" },
  { nome:"Conect Play", logo:"logos/conect.png", url:"https://conectplay.sigma.vin/#/sign-in" },
  { nome:"CineHub BR", logo:"logos/cinehub.png", url:"https://cinehub-br.sigma.st/#/sign-in" },
  { nome:"Prime Lux", logo:"logos/primelux.png", url:"https://primelux.sigma.st/" },
  { nome:"Sport Play", logo:"logos/sportplay.png", url:"https://sportplay.sigma.vin/" },
  { nome:"Kronos Server", logo:"logos/kronos.png", url:"https://kronosserver.ryzen.fun/login" },
  { nome:"Premium Server", logo:"logos/premium.png", url:"https://premiumserver.sigma.vin/" },
  { nome:"Alpha Master", logo:"logos/alpha.png", url:"https://alphamaster.sigma.st/" },
  { nome:"Entre", logo:"logos/entre.png", url:"https://entre.p2vip.xyz/" },
  { nome:"Painel CineHub", logo:"logos/painelcinehub.png", url:"https://painelcinehub.top/" },
  { nome:"Fox Play", logo:"logos/fox.png", url:"https://foxplay.sigma.vin/" },
  { nome:"All Box", logo:"logos/allbox.png", url:"https://allboxpaineladm.blog/" },
  { nome:"Odin Super", logo:"logos/odin.png", url:"https://odinsuper1x00.top/" },
  { nome:"Vizion Net", logo:"logos/vizion.png", url:"https://vizion-net.sigmab.pro/" },
  { nome:"P2 Live", logo:"logos/p2live.png", url:"https://p2live.sigmab.pro/" },
  { nome:"Cineflix", logo:"logos/cineflix.png", url:"https://cineflix.3xt.fun/" },
  { nome:"Lider IPTV", logo:"logos/lider.png", url:"https://lideriptv.sigma.st/" },
  { nome:"Painel W3 BR", logo:"logos/w3br.png", url:"https://painelw3brtop.sytes.net/" }
];

const paineisTestes = paineisOficiais.map(p => ({ ...p, urlTeste: p.url }));

const appsParceiros = [
  { nome: "MAX PLAYER (App Próprio)", logo: "logos/maxplayer.png", sis: "Android / Fire Stick", downloader: "1890184", url: "http://aftv.news/1890184" },
  { nome: "UNITV (Android)", logo: "logos/unitv.png", sis: "Android", downloader: "8090976", url: "http://aftv.news/8090976", user: "369496943", pass: "811852429" },
  { nome: "UNI REVENDA", logo: "logos/unirevenda.png", sis: "Android / Painel", ntdown: "2116714", user: "369496943", pass: "811852429" },
  { nome: "GPC PRO", logo: "logos/gpcpro.png", sis: "Android / Painel", ntdown: "2116714", user: "369496943", pass: "811852429" },
  { nome: "HOME PLAYER XTREAM", logo: "logos/homeplayerxtream.png", sis: "Android", ntdown: "63334", downloader: "6245886", url: "http://aftv.news/6245886" },
  { nome: "APP ZINK", logo: "logos/zink.png", sis: "Android", ntdown: "68618", downloader: "1650495", url: "http://aftv.news/1650495" },
  { nome: "HOME PLAYER", logo: "logos/homeplayer.png", sis: "Android", ntdown: "28558", downloader: "8845054", url: "http://aftv.news/8845054" },
  { nome: "TOP TV", logo: "logos/toptv.png", sis: "Android", ntdown: "4710019", downloader: "4710019", url: "http://aftv.news/4710019" },
  { nome: "LAZER PLAY", logo: "logos/lazerplay.png", sis: "Provedor / Multiplataforma" },
  { nome: "FUN PLAY", logo: "logos/funplay.png", sis: "Provedor / Multiplataforma" },
  { nome: "SMARTCPP", logo: "logos/smartcpp.png", sis: "Provedor / Multiplataforma" },
  { nome: "BLASSED PLAYER", logo: "logos/blassed.png", sis: "Smart TV / Android" },
  { nome: "ASSIST+ OFICIAL", logo: "logos/assistplus.png", sis: "LG, Roku, Android, Fire Stick" },
  { nome: "PLAYSIM", logo: "logos/playsim.png", sis: "LG, Roku, Samsung, Android" },
  { nome: "MAGIC PLAYER", logo: "logos/magicplayer.png", sis: "Roku" },
  { nome: "VIZZION PLAY", logo: "logos/vizzion.png", sis: "LG, Roku, Samsung, iPhone, Windows, Android" },
  { nome: "BOX PLAYER", logo: "logos/boxplayer.png", sis: "LG, Roku, Fire TV" },
  { nome: "JJ PLAYER", logo: "logos/jjplayer.png", sis: "Android, Smart TV" },
  { nome: "DUO TV", logo: "logos/duotv.png", sis: "Android, Smart TV" },
  { nome: "MULT BOX", logo: "logos/multbox.png", sis: "Android, TV Box" },
  { nome: "SYNC21 PLAYER", logo: "logos/sync21.png", sis: "Multiplataforma" },
  { nome: "UP PLAY", logo: "logos/upplay.png", sis: "Multiplataforma" },
  { nome: "MAX21", logo: "logos/max21.png", sis: "Multiplataforma" },
  { nome: "ZUXO PLAYER", logo: "logos/zuxo.png", sis: "LG, Roku, iPhone, Android, Xbox" },
  { nome: "BRASIL IPTV", logo: "logos/brasiliptv.png", sis: "LG, Roku, Samsung, Android" },
  { nome: "FLEX PLAY", logo: "logos/flexplay.png", sis: "LG, Roku, Samsung" },
  { nome: "GALAX PLAY", logo: "logos/galaxplay.png", sis: "Samsung" },
  { nome: "BOX PRIME", logo: "logos/boxprime.png", sis: "Roku" },
  { nome: "DUPLEX MAX", logo: "logos/duplexmax.png", sis: "Roku" },
  { nome: "POWER PLAY", logo: "logos/powerplay.png", sis: "Roku, LG, Samsung, Android" },
  { nome: "EPIC PLAY", logo: "logos/epicplay.png", sis: "Roku, LG, Samsung, Android" },
  { nome: "SUPER PLAY", logo: "logos/superplay.png", sis: "LG, Roku, Samsung, Android" }
];

const ativacoesApps = [
  { nome: "Painel de Ativação de Apps", logo: "logos/ativacao.png", sis: "Ative licenças e aplicativos rapidamente", url: "https://ativacaodeaplicativos.com/?ref=cmn36pjfx0i8on7yr3ouq2dck" }
];

let abaAtual = 'oficiais';

// FUNÇÕES DE AUTENTICAÇÃO
function autenticar() {
  const user = document.getElementById("login-usuario").value.trim();
  const pass = document.getElementById("login-senha").value.trim();
  const msgErro = document.getElementById("erro-login");

  if (user === credenciaisValidas.usuario && pass === credenciaisValidas.senha) {
    localStorage.setItem("logado_painel", "true");
    liberarAcesso();
  } else {
    if (msgErro) msgErro.style.display = "block";
  }
}

function liberarAcesso() {
  const overlay = document.getElementById("login-overlay");
  const sistema = document.getElementById("conteudo-sistema");
  if (overlay) overlay.style.display = "none";
  if (sistema) sistema.style.display = "block";
}

function sair() {
  localStorage.removeItem("logado_painel");
  location.reload();
}

// INICIALIZAÇÃO APÓS CARREGAR O DOM
document.addEventListener("DOMContentLoaded", () => {

  // Checa Sessão de Login
  if (localStorage.getItem("logado_painel") === "true") {
    liberarAcesso();
  }

  const passInput = document.getElementById("login-senha");
  if (passInput) {
    passInput.addEventListener("keyup", (e) => {
      if (e.key === "Enter") autenticar();
    });
  }

  const area = document.getElementById("painels");
  const total = document.getElementById("total");
  const tituloSecao = document.getElementById("titulo-Secao");
  const secaoRevenda = document.getElementById("secao-revenda");
  const busca = document.getElementById("pesquisa");

  // RENDERIZADOR DE CARDS
  window.mostrar = function(lista) {
    if (!area) return;
    area.innerHTML = "";
    if (total) total.textContent = lista.length;

    lista.forEach((p, index) => {
      let inicial = p.nome.charAt(0);
      let card = document.createElement("div");
      card.className = "card";

      if (abaAtual === 'oficiais') {
        card.innerHTML = `
          <div class="logo">
            <img src="${p.logo}" loading="lazy" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex'">
            <span>${inicial}</span>
          </div>
          <h3>${p.nome}</h3>
          <a href="${p.url}" target="_blank">Abrir Painel</a>
        `;
      } else if (abaAtual === 'testes') {
        card.innerHTML = `
          <div class="logo">
            <img src="${p.logo}" loading="lazy" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex'">
            <span>${inicial}</span>
          </div>
          <h3>${p.nome}</h3>
          <a href="${p.url}" target="_blank" style="background-color: #28a745;">Gerar painel teste com 1 crédito</a>
        `;
      } else if (abaAtual === 'parceiros') {
        let infoDownload = '';
        if (p.downloader || p.ntdown || p.user) {
          infoDownload = `<div style="font-size: 0.8em; text-align: left; background: rgba(0,0,0,0.25); padding: 8px; border-radius: 5px; margin: 8px 0;">`;
          if (p.ntdown) infoDownload += `📌 NTDOWN: <b>${p.ntdown}</b><br>`;
          if (p.downloader) infoDownload += `📥 Downloader: <b>${p.downloader}</b><br>`;
          if (p.user) infoDownload += `👤 Usuário: <b>${p.user}</b><br>`;
          if (p.pass) infoDownload += `🔑 Senha: <b>${p.pass}</b>`;
          infoDownload += `</div>`;
        }

        card.innerHTML = `
          <div class="logo">
            <img src="${p.logo}" loading="lazy" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex'">
            <span>${inicial}</span>
          </div>
          <h3>${p.nome}</h3>
          <p style="font-size: 0.85em; opacity: 0.8; margin: 3px 0;">📱 ${p.sis}</p>
          ${infoDownload}
          <a href="${p.url || 'https://wa.me/?text=Olá,+tenho+interesse+no+app+' + encodeURIComponent(p.nome)}" target="_blank" style="background-color: #17a2b8;">
            ${p.url ? '🔗 Baixar App' : 'Consultar no PV'}
          </a>
        `;
      } else if (abaAtual === 'ativacoes') {
        card.innerHTML = `
          <div class="logo">
            <img src="${p.logo}" loading="lazy" onerror="this.style.display='none';if(this.nextElementSibling)this.nextElementSibling.style.display='flex'">
            <span>⚡</span>
          </div>
          <h3>${p.nome}</h3>
          <p style="font-size: 0.85em; opacity: 0.8; margin: 5px 0 10px;">📲 ${p.sis}</p>
          <a href="${p.url}" target="_blank" style="background-color: #ff9f43; font-weight: bold;">Acessar Sistema de Ativação</a>
        `;
      }

      // ENTRADA ANIMADA DOS CARDS
      card.style.opacity = "0";
      card.style.transform = "translateY(50px)";
      setTimeout(() => {
        card.style.transition = "all .6s ease";
        card.style.opacity = "1";
        card.style.transform = "translateY(0)";
      }, index * 40);

      // EFEITO 3D PREMIUM
      card.addEventListener("mousemove", (e) => {
        let rect = card.getBoundingClientRect();
        let x = e.clientX - rect.left;
        let y = e.clientY - rect.top;
        let rotateX = (y - rect.height / 2) / 15;
        let rotateY = (rect.width / 2 - x) / 15;
        card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "";
      });

      // HISTÓRICO DE ACESSOS
      let botaoAcao = card.querySelector("a");
      if (botaoAcao) {
        botaoAcao.addEventListener("click", () => {
          let historico = JSON.parse(localStorage.getItem("historico")) || [];
          historico.unshift({ nome: p.nome, data: new Date().toLocaleString("pt-BR") });
          localStorage.setItem("historico", JSON.stringify(historico.slice(0, 10)));
        });
      }

      area.appendChild(card);
    });
  };

  // TROCA DE ABAS
  window.mudarAba = function(tipo) {
    abaAtual = tipo;
    if (busca) busca.value = "";

    ['oficiais', 'testes', 'parceiros', 'revenda', 'ativacoes'].forEach(aba => {
      let btn = document.getElementById(`btn-${aba}`);
      if (btn) btn.style.opacity = tipo === aba ? '1' : '0.6';
    });

    if (tipo === 'revenda') {
      if (area) area.style.display = "none";
      if (secaoRevenda) secaoRevenda.style.display = "block";
      if (busca) busca.style.display = "none";
      if (tituloSecao) tituloSecao.textContent = "Tabela de Preços e Créditos";
      if (total) total.textContent = "";
    } else {
      if (area) area.style.display = "grid";
      if (secaoRevenda) secaoRevenda.style.display = "none";
      if (busca) busca.style.display = "inline-block";

      if (tipo === 'oficiais') {
        if (tituloSecao) tituloSecao.textContent = "Painéis Disponíveis";
        mostrar(paineisOficiais);
      } else if (tipo === 'testes') {
        if (tituloSecao) tituloSecao.textContent = "Painéis de Teste Disponíveis";
        mostrar(paineisTestes);
      } else if (tipo === 'parceiros') {
        if (tituloSecao) tituloSecao.textContent = "Apps Parceiros Disponíveis";
        mostrar(appsParceiros);
      } else if (tipo === 'ativacoes') {
        if (tituloSecao) tituloSecao.textContent = "Ativações de Aplicativos";
        mostrar(ativacoesApps);
      }
    }
  };

  // PESQUISA INTELIGENTE
  if (busca) {
    busca.addEventListener("input", () => {
      let valor = busca.value.toLowerCase();
      let base;
      if (abaAtual === 'oficiais') base = paineisOficiais;
      else if (abaAtual === 'testes') base = paineisTestes;
      else if (abaAtual === 'parceiros') base = appsParceiros;
      else if (abaAtual === 'ativacoes') base = ativacoesApps;

      if (base) mostrar(base.filter(p => p.nome.toLowerCase().includes(valor)));
    });
  }

  // BOTÃO TOPO
  const topo = document.createElement("button");
  topo.id = "topo";
  topo.innerHTML = "⬆";
  document.body.appendChild(topo);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) topo.classList.add("show");
    else topo.classList.remove("show");
  });

  topo.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

  // RELÓGIO DINÂMICO
  setInterval(() => {
    let relogio = document.getElementById("relogio");
    if (relogio) relogio.innerHTML = new Date().toLocaleTimeString("pt-BR");
  }, 1000);

  // PARTICULAS DE FUNDO (SE particle.js ESTIVER CARREGADO)
  if (typeof particlesJS !== "undefined") {
    particlesJS("particles-js", {
      particles: {
        number: { value: 80 },
        color: { value: "#00eaff" },
        shape: { type: "circle" },
        opacity: { value: .35 },
        size: { value: 3 },
        move: { enable: true, speed: 1.2 },
        line_linked: { enable: true, distance: 140, color: "#00eaff", opacity: .2 }
      },
      interactivity: { events: { onhover: { enable: true, mode: "repulse" } } }
    });
  }

  // Inicializa o painel principal
  mostrar(paineisOficiais);
  console.log("🚀 Central de Painéis Premium carregada");
});
