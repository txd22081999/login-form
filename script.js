window.onload = () => {
  const form = document.querySelector(".form");
  const name = document.querySelector("#name");
  const password = document.querySelector("#password");
  const leftEye = document.querySelector("#LeftEye");
  const rightEye = document.querySelector("#RightEye");
  const svg = document.querySelector("svg");
  const smile = document.querySelector("#SmileLip");

  const MAX_LENGTH = 22;
  const MAX_OFFSET = 8;

  name.addEventListener("input", (e) => {
    const value = e.target.value;
    const percent = Math.floor((value.length / MAX_LENGTH) * 100);
    const offset = (percent / 100) * MAX_OFFSET * 2;
    let x = offset - 8;
    const y = 6;
    smile.style = "opacity: 0";

    if (x > MAX_OFFSET) {
      x = MAX_OFFSET;
    }

    if (x < -MAX_OFFSET) {
      x = -MAX_OFFSET;
    }

    leftEye.style = `transform: translate(${x}px, ${y}px)`;
    rightEye.style = `transform: translate(${x}px, ${y}px)`;
  });

  name.addEventListener("blur", () => {
    leftEye.style = `transform: translate(0px, 0px)`;
    rightEye.style = `transform: translate(0px, 0px)`;
  });

  password.addEventListener("focus", (e) => {
    svg.classList.add("up");
    smile.style = "opacity: 1";
  });

  password.addEventListener("blur", (e) => {
    svg.classList.remove("up");
  });

};
