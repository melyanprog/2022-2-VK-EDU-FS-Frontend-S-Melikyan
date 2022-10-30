import "../css/main.css";
import "../css/chats/chats_header.css";
import "../css/chats/chats_body.css";
import "../css/chats/chats_cr_button.css";

const chat = document.querySelector(".chat");
const msg = document.querySelector(".message");
const time = document.querySelector(".time");

chat.addEventListener("click", goToDialog.bind(this));
document.addEventListener(
  "DOMContentLoaded",
  getMesageFromLocalStorage.bind(this)
);

function goToDialog() {
  window.location.href = "./dialog.html";
}

function createMessage(message) {
  msg.innerText = message.text;
  time.innerText = message.time;
}

function getMesageFromLocalStorage() {
  const count = Number(localStorage.getItem("count"));
  if (!count) return;
  const message = localStorage.getItem(count);
  createMessage(JSON.parse(message));
  console.log(message);
}
