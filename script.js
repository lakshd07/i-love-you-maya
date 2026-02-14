const cursor = document.getElementById("cursor");
const cursorImg = document.querySelector("#cursor img");

document.addEventListener('mousemove', e => {
  cursor.style.zIndex = 100;
  const posX = e.x;
  const posY = e.y;
  cursor.style.left = `${posX - (cursor.offsetWidth / 2)}px`;
  cursor.style.top = `${posY - (cursor.offsetHeight / 2)}px`;
}, { once: true });

const mouseMove = document.addEventListener('mousemove', e => {
  const posX = e.x;
  const posY = e.y;

  // Smooth animation
  cursor.animate({
    left: `${posX - (cursor.offsetWidth / 2)}px`,
    top: `${posY - (cursor.offsetHeight / 2)}px`,
  }, { duration: 500, fill: 'forwards' });
});

const noBtn = document.querySelector(".main-content .buttons .no");
const yesBtn = document.querySelector(".main-content .buttons .yes");
let yesBtnHeight = 60;
let yesBtnWidth = 180;
const hamsterEmoji = document.querySelector(".hamster-emoji");

noBtn.addEventListener('mouseenter', () => {
  cursorImg.src = "./assets/heart-broken.png";
});
noBtn.addEventListener('mouseleave', () => {
  cursorImg.src = "./assets/heart.png";
});

const responses = ["really?", "are you sure?", "think again...", "what if I asked really nicely?", "pretty pleaseee", "Ill buy you sushi", "PLEASE POOKIEEE", ":*(", "im going to die", "yeah im dead", "...", "youre talking to Laksh's ghost now..", "please babee", ":(((((", "estoy muerto", "noo :("];
const hamsters = ["./assets/plead-hamster.png", "./assets/cry-hamster.png"];
let i = 0;
let j = 0;
noBtn.addEventListener("click", () => {
  if (i < responses.length) {
    noBtn.innerHTML = responses[i];
    i++;
  }

  if (j < hamsters.length) {
    hamsterEmoji.src = hamsters[j];
    j++;
  }

  yesBtnHeight += 20;
  yesBtnWidth += 20;
  yesBtn.style.height = yesBtnHeight + "px";
  yesBtn.style.width = yesBtnWidth + "px";
})

yesBtn.addEventListener("click", () => {
  document.querySelector(".buttons").style.display = "none";
  document.querySelector(".title h1").innerHTML = "YAYYY I love you so much my princess💋💋<br>My valentine for life 💝";
  hamsterEmoji.src = "./assets/kiss-hamster.png";
  hamsterEmoji.style.scale = 1.2;
})