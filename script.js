const storyText = `

Hai Manis...

Aku masih ingat saat pertama kali kita bertemu.

Awalnya hanya dua orang asing yang dipertemukan oleh Roblox.

Tidak ada yang menyangka cerita itu akan membawa kita sejauh ini.

Termasuk aku.

Seiring berjalannya waktu...

Aku mulai menunggumu online.

Mulai mencari namamu.

Mulai merasa ada yang kurang ketika hari berlalu tanpa kabarmu.

Dan tanpa sadar...

Aku jatuh cinta.

`;

const textTarget = document.getElementById("typingText");

let i = 0;

function typeWriter(){

if(i < storyText.length){

textTarget.innerHTML += storyText.charAt(i);

i++;

setTimeout(typeWriter,40);

}

}

document.getElementById("startBtn").onclick = ()=>{

document.getElementById("music").play();

document.getElementById("story").classList.remove("hidden");

typeWriter();

};

let day = 1;

const counter = document.getElementById("counter-love");

const timer = setInterval(()=>{

counter.innerHTML = `❤️ Hari ke-${day}`;

day += 3;

if(day >= 210){

clearInterval(timer);

counter.innerHTML = `
<h1>❤️ 7 BULAN ❤️</h1>
<p>Fhadil & Manis</p>
`;

}

},35);

function openImage(src){

document.getElementById("lightbox").style.display="flex";

document.getElementById("lightbox-img").src=src;

}

function closeImage(){

document.getElementById("lightbox").style.display="none";

}

function createHearts(){

for(let i=0;i<50;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(Math.random()*3+2)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},5000);

}

}
