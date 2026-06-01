const openBtn = document.getElementById("openBtn");
const music = document.getElementById("bgMusic");

openBtn.addEventListener("click",()=>{

music.play();

document.querySelectorAll(".hidden")
.forEach(item=>item.style.display="flex");

window.scrollTo({
top:window.innerHeight,
behavior:"smooth"
});

showStory();
showLetter();

});

const storyLines = [

"Siapa sangka...",

"Dari sebuah game Roblox...",

"Aku menemukan seseorang yang begitu berarti.",

"Awalnya kita hanya teman satu grup.",

"Tidak ada yang tahu kalau semuanya akan berubah.",

"Aku mulai menunggu pesanmu.",

"Aku mulai senang ketika berbicara denganmu.",

"Dan tanpa sadar...",

"Aku jatuh cinta kepada kamu ❤️"

];

function showStory(){

let i=0;

const area=document.getElementById("storyText");

function next(){

if(i<storyLines.length){

area.innerHTML += storyLines[i]+"<br><br>";

i++;

setTimeout(next,1800);

}

}

next();

}

const letter = `

Hai Ayang ❤️

Kalau ada yang bilang pertemuan paling indah selalu terjadi di tempat yang istimewa...

Mungkin cerita kita berbeda.

Karena siapa sangka...

Dari Roblox...

Aku bisa menemukan seseorang yang akhirnya menjadi begitu berarti.

Awalnya kita hanya teman.

Hanya seseorang yang hadir dalam hari-hariku.

Tapi semakin lama aku mengenalmu...

Semakin aku sadar bahwa ada sesuatu yang berbeda.

Aku menunggu pesanmu.

Aku senang saat bisa mengobrol denganmu.

Aku tersenyum saat melihat namamu muncul.

Dan perlahan...

Perasaan itu tumbuh.

Sampai akhirnya aku sadar...

Aku sangat menyayangimu.

Terima kasih sudah hadir dalam hidupku.

Terima kasih sudah menjadi alasan banyak senyumku.

Aku tidak tahu bagaimana masa depan akan berjalan.

Tapi aku tahu satu hal.

Hari ini.

Besok.

Dan selama aku masih bisa.

Aku akan terus memilih kamu.

Karena dari jutaan orang di dunia ini...

Hatiku memilih Manis.

Aku sayang kamu ❤️

- Fhadil

`;

function showLetter(){

let i=0;

const target=document.getElementById("letter");

function typing(){

if(i<letter.length){

target.innerHTML += letter.charAt(i);

i++;

setTimeout(typing,35);

}

}

typing();

}

document.getElementById("hugBtn")
.addEventListener("click",()=>{

document.getElementById("hugMessage").innerHTML=

"<h2>🤗 Aku Sayang Kamu, Ayang ❤️</h2>";

});

setInterval(()=>{

const heart=document.createElement("div");

heart.innerHTML="❤️";

heart.style.position="fixed";

heart.style.left=Math.random()*100+"vw";

heart.style.top="-20px";

heart.style.fontSize=(Math.random()*20+15)+"px";

heart.style.pointerEvents="none";

heart.style.zIndex="999";

document.body.appendChild(heart);

let y=-20;

const anim=setInterval(()=>{

y+=4;

heart.style.top=y+"px";

if(y>window.innerHeight){

clearInterval(anim);

heart.remove();

}

},20);

},500);