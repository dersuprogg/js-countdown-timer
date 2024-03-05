"use strict";
const startBtn = document.querySelector(".btn");
const inputText = document.querySelector(".display");
const bar = document.querySelector(".bar");

startBtn.addEventListener("click", function () {
  const intervalId = setInterval(() => {
    let time = parseInt(inputText.value);
    if (time > 0) {
      time--;
      inputText.value = time;
    } else {
      clearInterval(intervalId);
    }
  }, 1000);

  const time = parseInt(inputText.value);

  const intervalId2 = setInterval(() => {
    let barWidth = bar.getBoundingClientRect().width;
    if (barWidth > 0) {
      barWidth -= 300 / time / 200;
      bar.style.width = `${barWidth}px`;
    } else {
      clearInterval(intervalId2);
    }
  }, 5);
});
