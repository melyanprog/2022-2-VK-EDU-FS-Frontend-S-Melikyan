import "./index.css";

const form = document.querySelector("form");
const input = document.querySelector(".form-input");
const chat = document.querySelector(".chat-body");

form.addEventListener("submit", handleSubmit.bind(this));
document.addEventListener(
  "DOMContentLoaded",
  getMesagesFromLocalStorage.bind(this)
);

function handleSubmit(event) {
  event.preventDefault();
  const message = {
    text: input.value,
    time: `${new Date().toLocaleTimeString("ru", {
      hour: "numeric",
      minute: "numeric",
    })}`,
  };
  createMessage(message);
  saveMessageToLocalStorage(message);
  input.value = "";
}

function handleKeyPress(event) {
  if (event.keyCode === 13) {
    form.dispatchEvent(new Event("submit"));
  }
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

function saveMessageToLocalStorage(message) {
  let messages = localStorage.getItem("messages") || "[]";
  messages = JSON.parse(messages);
  messages.push(message);
  localStorage.setItem("messages", JSON.stringify(messages));
}

function getMesagesFromLocalStorage() {
  let messages = localStorage.getItem("messages") || "[]";
  messages = JSON.parse(messages);
  for (const message of messages) {
    createMessage(message);
  }
}
