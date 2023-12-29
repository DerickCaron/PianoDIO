const pianoKeys = document.querySelectorAll(".piano-keys .key");
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheckbox = document.querySelector(".keys-check input");

let volume = 0.5;
let lettersVisible = true; 

volumeSlider.addEventListener("input", (e) => {
  volume = e.target.value;
});

window.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase();

  if (key !== "m" && lettersVisible) {
    const audio = new Audio(`./audios/${key}.wav`);
    audio.volume = volume;
    audio.play();

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
      clickedKey.classList.remove("active");
    }, 150);
  }
});

pianoKeys.forEach((keyElement) => {
  const key = keyElement.dataset.key;

  keyElement.addEventListener("click", () => {
    if (lettersVisible) {
      const audio = new Audio(`./audios/${key}.wav`);
      audio.volume = volume;
      audio.play();
    }
  });
});

keysCheckbox.addEventListener("change", () => {
  lettersVisible = !lettersVisible;
  toggleLettersVisibility();
});

function toggleLettersVisibility() {
  const pianoLetters = document.querySelectorAll(".piano-keys .key span");

  if (lettersVisible) {
    pianoLetters.forEach((letter) => {
      letter.style.display = "block";
    });
  } else {
    pianoLetters.forEach((letter) => {
      letter.style.display = "none";
    });
  }
}
