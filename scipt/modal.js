//
// photo modal
//
const openBtn = document.querySelector(".openBtn");
const modal__container = document.querySelector(".modal__container");
const closeBtn = document.querySelector(".closeBtn");

openBtn.addEventListener("dblclick", () => {
    modal__container.classList.add("open");
});

closeBtn.addEventListener("dblclick", () => {
    modal__container.classList.remove("open");
});

//menu open close
const menuBtn = document.querySelector(".menu");

const menuBar = document.querySelector(".menu__toggle");

menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("click");
    menuBar.classList.toggle("open");
});

// link photos menu toggle to open photo
const photoMenu = document.querySelector("#menu__photo");

photoMenu.addEventListener("dblclick", () => {
    modal__container.classList.add("open");
});

photoMenu.addEventListener("mouseenter", () => {
    photoMenu.classList.add("hover");
});
photoMenu.addEventListener("mouseleave", () => {
    photoMenu.classList.remove("hover");
});

//
// welcome modal
//
// open close  welcome modal
const welcomeIcon = document.getElementById("welcomeIcon");
const welcomeModal = document.getElementById("modal__container2");
const welcomeClose = document.getElementById("closeBtn2");

welcomeIcon.addEventListener("dblclick", () => {
    welcomeModal.classList.add("open");
});

welcomeClose.addEventListener("dblclick", () => {
    welcomeModal.classList.remove("open");
});

// link welcome modal to menu toggle
const welcomeMenu = document.querySelector("#menu__welcome");

welcomeMenu.addEventListener("dblclick", () => {
    welcomeModal.classList.add("open");
});
welcomeMenu.addEventListener("mouseenter", () => {
    welcomeMenu.classList.add("hover");
});
welcomeMenu.addEventListener("mouseleave", () => {
    welcomeMenu.classList.remove("hover");
});

//
// todo modal
//
// open close to do modal
const todoIcon = document.querySelector("#todoIcon");
const todoModal = document.getElementById("modal__container3");
const todoClose = document.querySelector("#closeBtn3");

todoIcon.addEventListener("dblclick", () => {
    todoModal.classList.add("open");
});
todoClose.addEventListener("dblclick", () => {
    todoModal.classList.remove("open");
});

// link todo modal to menu toggle
const todoMenu = document.querySelector("#menu__todo");

todoMenu.addEventListener("dblclick", () => {
    todoModal.classList.add("open");
});
todoMenu.addEventListener("mouseenter", () => {
    todoMenu.classList.add("hover");
});
todoMenu.addEventListener("mouseleave", () => {
    todoMenu.classList.remove("hover");
});

// icon click turns grey
const welcomeBg = document.querySelector("#welcomeIcon");
welcomeBg.addEventListener("click", () => {
    welcomeBg.classList.toggle("open");
});
const todoBg = document.querySelector("#todoIcon");
todoBg.addEventListener("click", () => {
    todoBg.classList.toggle("open");
});
const photoBg = document.querySelector("#photoIcon");
photoBg.addEventListener("click", () => {
    photoBg.classList.toggle("open");
});
