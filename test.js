// icon open/close
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
    menuBar.classList.toggle("open");
});

// To do Add/Clear
const todoAddBtn = document.querySelector("#addTask");

const todoClearBtn = document.querySelector("#clearTask");
const taskBox = document.querySelector(".todo__addedTask");
const taskInput = document.querySelector("input");
const newListTag = document.createElement("p");
// add item to addedTask section
todoAddBtn.addEventListener("click", () => {
    const newText = document.createTextNode(taskInput.value);
    newListTag.appendChild(newText);
    taskBox.appendChild(newListTag);
});

// clear task
// todoClearBtn.addEventListener("click", () => {});
