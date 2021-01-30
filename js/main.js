"use strict";

const faceElement = document.querySelector(".face");

function handleWink(event) {
  if (event.type === "mouseover") {
    faceElement.innerHTML = ";)"
  };
  if (event.type === "mouseout") {
    faceElement.innerHTML = ":)"
  };
}

faceElement.addEventListener("mouseover", handleWink);
faceElement.addEventListener("mouseout", handleWink);