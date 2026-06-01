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

document.querySelector(".hero").classList.add("hide");

setTimeout(()=>{

document.getElementById("story").style.display="block";
document.querySelector(".counter-section").style.display="block";
document.querySelector(".slider").style.display="flex";
document.querySelector(".love-letter").style.display="block";
document.querySelector(".ending").style.display="block";

document.getElementById("story")
.classList.remove("hidden");

typeWriter();

},1500);

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
<p>Fhadil ❤️ Manis</p>
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

for(let i=0;i<80;i++){

const heart = document.createElement("div");

heart.classList.add("heart");

heart.innerHTML = "❤️";

heart.style.left = Math.random()*100+"vw";

heart.style.animationDuration =
(Math.random()*3+2)+"s";

document.body.appendChild(heart);

setTimeout(()=>{
heart.remove();
},5000);

}

}
const photos = [
"foto1.jpg",
"foto2.jpg",
"foto3.jpg",
"foto4.jpg",
"foto5.jpg",
"foto6.jpg",
"foto7.jpg",
"foto8.jpg"
];

let currentPhoto = 0;

setInterval(()=>{

const slider = document.getElementById("sliderImage");

if(!slider) return;

currentPhoto++;

if(currentPhoto >= photos.length){
currentPhoto = 0;
}

slider.src = photos[currentPhoto];

},3000);
const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){
entry.target.classList.add("show");
}

});

});

document.querySelectorAll(".fade").forEach(el=>{
observer.observe(el);
});
