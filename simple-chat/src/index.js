import "./index.css";

const form = document.querySelector("form");
const input = document.querySelector(".form-input");
const chat = document.querySelector(".chat-body");

form.addEventListener("submit", handleSubmit.bind(this));
document.addEventListener(
  "DOMContentLoaded",
  getMesagesFromLocalStorage.bind(this)
);

function handleSubmit() {
  if (!input.value) return;
  const message = {
    text: input.value,
    time: `${new Date().getHours()}:${new Date().getMinutes()}`,
  };
  createMessage(message);
  saveMessageToLocalStorage(message);
  input.value = "";
}

function createMessage(message) {
  const messageContainer = document.createElement("div");
  messageContainer.className = "message right";

  const text = document.createElement("span");
  text.className = "text";
  text.innerText = message.text;

  const time = document.createElement("span");
  time.className = "time";
  time.innerText = message.time;

  const done_all = document.createElement("div");
  done_all.className = "done-all";
  done_all.innerHTML = '<span class="material-icons">done_all</span>';

  const data = document.createElement("div");
  data.className = "data";
  data.append(...[time, done_all]);

  messageContainer.append(...[text, data]);
  chat.prepend(messageContainer);
}

function getMesagesFromLocalStorage() {
  const count = Number(localStorage.getItem("count"));
  if (!count) return;
  for (let i = 1; i <= count; i++) {
    const message = localStorage.getItem(i);
    createMessage(JSON.parse(message));
  }
}

function saveMessageToLocalStorage(message) {
  let count = Number(localStorage.getItem("count")) || 0;
  count++;
  localStorage.setItem(count, JSON.stringify(message));
  localStorage.setItem("count", count);
}
