const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
const toClose = document.querySelector("#toClose");
const toOpen = document.querySelector("#toOpen");
const randomMessageElement = document.querySelector("#randomMessage");
const vibrateElement = document.querySelector(".vibrate");

toOpen.addEventListener("click", handleOpenClick);
toClose.addEventListener("click", handleResetClick);

const randomMessages = [
  "Uma jornada de mil milhas começa com um único passo.",
  "O que quer que você lute, você fortalece, e o que você resiste, persiste.",
  "A alegria está na luta, na tentativa, no sofrimento envolvido, não na vitória em si.",
  "Você é mais forte do que pensa e será mais feliz do que imagina.",
  "As dificuldades não foram feitas para nos paralisar, mas para serem superadas.",
];

function handleOpenClick() {
  const randomIndex = Math.floor(Math.random() * randomMessages.length);
  const randomMessage = randomMessages[randomIndex];
  randomMessageElement.textContent = randomMessage;
  toggleScreen();
}

function handleResetClick() {
  toggleScreen();
}

function toggleScreen() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}

vibrateElement.addEventListener("mouseover", () => {
  vibrateElement.classList.add("animate-vibrate");
});

vibrateElement.addEventListener("mouseout", () => {
  vibrateElement.classList.remove("animate-vibrate");
});
