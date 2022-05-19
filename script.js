const refs = {
  questionWindow: document.querySelector(".js-window"),
  input: document.querySelector(".js-input"),
  btnYes: document.querySelector(".js-btn-yes"),
  btnNo: document.querySelector(".js-btn-no"),
};

refs.btnYes.addEventListener("mouseover", changeBtnPosition);
refs.btnYes.addEventListener("mouseover", changeBtnPosition);
refs.btnNo.addEventListener("click", clickBtnNoHandler);

function clickBtnNoHandler() {
  const input = refs.input;
  const currentValue = input.value;
  input.value = "Russian warship, f*ck yourself";
  setTimeout(() => {
    input.value = currentValue;
    refs.btnYes.removeAttribute("style");
  }, 3000);
}

function changeBtnPosition() {
  const windowWidth = window.innerWidth;
  const windowHeight = window.innerHeight;
  const { width, height } = refs.btnYes.getBoundingClientRect();
  const x = getRandomNumber(width, windowWidth - width);
  const y = getRandomNumber(height, windowHeight - height);

  refs.btnYes.style.position = "absolute";
  refs.btnYes.style.top = `${y}px`;
  refs.btnYes.style.left = `${x}px`;
}

function getRandomNumber(min, max) {
  return Math.round(Math.random() * (max - min) + min);
}
