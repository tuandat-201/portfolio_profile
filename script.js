"use strict";

const header = document.querySelector(".header");
const form = document.querySelector(".contact-form-container");
const openForm = document.querySelector(".contact-btn");
const closeForm = document.querySelector(".close-form");
const overlay = document.querySelector(".overlay");

openForm.addEventListener("click", () => {
  overlay.style.display = "block";
  form.style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = "15px";
  header.style.paddingRight = "36.5rem";
});

closeForm.addEventListener("click", () => {
  overlay.style.display = "none";
  form.style.display = "none";
  document.body.style.overflow = "visible";
  document.body.style.paddingRight = "0px";
  header.style.paddingRight = "35rem";
});
