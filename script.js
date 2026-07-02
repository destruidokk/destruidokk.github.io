// ===== ELEMENTOS =====
const btnEntrar = document.getElementById("btnEntrar");
const inicio = document.querySelector(".inicio");
const principal = document.getElementById("principal");

const foto = document.getElementById("foto");
const textoFrase = document.getElementById("textoFrase");

const btnCarta = document.getElementById("btnCarta");
const envelope = document.getElementById("envelope");

// ===== FOTOS =====
const fotos = [
"foto1.jpg",
"foto2.jpg",
"foto3.jpg",
"foto4.jpg",
"foto5.jpg"
];

// ===== FRASES =====
const frases = [
"❤️ Você apareceu quando eu menos esperava.",
"🌹 Seu sorriso deixa qualquer dia mais bonito.",
"✨ Obrigado por fazer parte dos meus dias.",
"💖 Ainda estamos escrevendo nossa história.",
"🌸 Espero viver muitos momentos especiais ao seu lado.",
"❤️ Nunca deixe de acreditar em você.",
"🌷 Você merece realizar todos os seus sonhos.",
"✨ Seu jeito faz diferença.",
"💖 Continue sendo essa pessoa incrível.",
"🌹 Que Deus ilumine sempre seus passos.",
"❤️ Espero que este seja apenas o começo.",
"💞 Você merece ser muito feliz."
];

// ===== CONTADORES =====
let indiceFoto = 0;
let indiceFrase = 0;

// ===== ABRIR SURPRESA =====
btnEntrar.addEventListener("click",()=>{
inicio.style.display="none";
principal.classList.remove("hidden");
trocarFrase();
setInterval(trocarFoto,3500);
setInterval(trocarFrase,5000);
});

// ===== TROCA DE FOTOS =====
function trocarFoto(){
    indiceFoto++;
    if(indiceFoto >= fotos.length){
        indiceFoto = 0;
    }
    foto.style.opacity = 0;
    setTimeout(()=>{
        foto.src = fotos[indiceFoto];
        foto.style.opacity = 1;
    },500);
}

// ===== TROCA DE FRASES =====
function trocarFrase(){
    textoFrase.style.opacity = 0;
    setTimeout(()=>{
        textoFrase.innerHTML = frases[indiceFrase];
        textoFrase.style.opacity = 1;
        indiceFrase++;
        if(indiceFrase >= frases.length){
            indiceFrase = 0;
        }
    },300);
}

// ===== CORAÇÕES =====
function criarCoracao(){
    const coracao = document.createElement("div");
    coracao.className = "heart";
    coracao.innerHTML = "❤️";
    coracao.style.left = Math.random()*100 + "vw";
    coracao.style.fontSize = (15 + Math.random()*25) + "px";
    coracao.style.animationDuration = (4 + Math.random()*5) + "s";
    document.getElementById("coracoes").appendChild(coracao);
    setTimeout(()=>{
        coracao.remove();
    },9000);
}
setInterval(criarCoracao,300);

// ===== ABRIR CARTA =====
btnCarta.addEventListener("click",()=>{
    envelope.classList.remove("hidden");
    envelope.scrollIntoView({
        behavior:"smooth"
    });
    iniciarFogos();
});

// ===== FOGOS DE ARTIFÍCIO =====
function iniciarFogos(){
    const canvas = document.getElementById("fogos");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    let particulas = [];
    for(let i=0;i<250;i++){
        particulas.push({
            x:canvas.width/2,
            y:canvas.height/2,
            dx:(Math.random()-0.5)*12,
            dy:(Math.random()-0.5)*12,
            r:2+Math.random()*3,
            cor:`hsl(${Math.random()*360},100%,60%)`
        });
    }
    function animar(){
        ctx.clearRect(0,0,canvas.width,canvas.height);
        particulas.forEach(p=>{
            ctx.beginPath();
            ctx.arc(p.x,p.y,p.r,0,Math.PI*2);
            ctx.fillStyle=p.cor;
            ctx.fill();
            p.x+=p.dx;
            p.y+=p.dy;
            p.dy+=0.04;
        });
        requestAnimationFrame(animar);
    }
    animar();
}

// ===== BOTÃO FINAL =====
const btnFinal = document.getElementById("btnFinal");
btnFinal.addEventListener("click",()=>{
    alert(
`❤️
Heloísa...
Obrigado por chegar na minha vida.
		Espero que esse seja apenas o começo de muitos momentos especiais ao seu lado.
Com carinho,
Rubens ❤️`
	);});
