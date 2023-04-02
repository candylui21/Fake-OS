// add item to list
const todoAddBtn = document.querySelector(".addBtn");
const taskInput = document.querySelector("input");
const doneBtn = document.querySelector(".doneBtn");

todoAddBtn.addEventListener("click", () => {
    if (taskInput.value === "") {
        return alert("please enter notes");
    }
    const newLiTag = document.createElement("li");
    const newText = document.createTextNode(taskInput.value);
    newLiTag.appendChild(newText);
    listItem.appendChild(newLiTag);
    listItem.classList.add("todo__item");
    taskInput.value = "";
});
