document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("#create-task-form");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    // Use the same selector as the test
    const formInput = document.querySelector("#new-task-description");
    const newTask = formInput.value;
    newTaskCreator(newTask);
    form.reset();
  });
});

function newTaskCreator(newTask) {
  const li = document.createElement("li"); 
  const btn = document.createElement("button");

  btn.addEventListener("click", handleDelete);
  btn.textContent = "X";

  // Append text first, then button
  li.appendChild(document.createTextNode(newTask + " "));
  li.appendChild(btn);

  document.querySelector("#tasks").appendChild(li);
}

function handleDelete(e) {
  e.target.parentNode.remove();
}